using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Quartz;
using System.Text;

namespace spr311_web_api.Infrastructure
{
    public static class DependencyInjection
    {
        public static void AddJobs(this IServiceCollection services, params (Type type, string cron)[] jobs)
        {
            services.AddQuartz(q =>
            {
                foreach (var job in jobs)
                {
                    var jobKey = new JobKey(job.type.Name);
                    q.AddJob(job.type, jobKey);

                    q.AddTrigger(opt => opt
                    .ForJob(jobKey)
                    .WithIdentity($"{job.type.Name}-trigger")
                    .WithCronSchedule(job.cron));
                }
            });
        }

        public static void AddJwt(this IServiceCollection services, IConfiguration configuration)
        {
            string secretKey = configuration["JwtSettings:SecretKey"]
                ?? throw new ArgumentNullException("jwt secret key is null");

            services.AddAuthentication(options =>
            {
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
             {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateAudience = true,
                    ValidateIssuer = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    RequireExpirationTime = true,
                    ClockSkew = TimeSpan.Zero,
                    ValidAudience = configuration["JwtSettings:Audience"],
                    ValidIssuer = configuration["JwtSettings:Issuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey))
                };
             });
        }
    }
}
