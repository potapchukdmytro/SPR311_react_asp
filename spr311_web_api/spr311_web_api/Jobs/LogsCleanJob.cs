using Quartz;

namespace spr311_web_api.Jobs
{
    public class LogsCleanJob : IJob
    {
        private readonly IWebHostEnvironment _environment;

        public LogsCleanJob(IWebHostEnvironment environment)
        {
            _environment = environment;
        }
        public Task Execute(IJobExecutionContext context)
        {
            string logsPath = Path.Combine(_environment.ContentRootPath, "logs");
            var logs = Directory.GetFiles(logsPath);

            foreach (var logPath in logs)
            {
                var file = new FileInfo(logPath);
                var minutes = (DateTime.UtcNow - file.CreationTimeUtc).TotalMinutes;
                if(minutes >= 5)
                {
                    File.Delete(logPath);
                }
            }

            return Task.CompletedTask;
        }
    }
}
