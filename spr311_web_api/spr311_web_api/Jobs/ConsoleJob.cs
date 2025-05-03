using Quartz;

namespace spr311_web_api.Jobs
{
    public class ConsoleJob : IJob
    {
        public Task Execute(IJobExecutionContext context)
        {
            Console.WriteLine("Quartz working");
            return Task.CompletedTask;
        }
    }
}
