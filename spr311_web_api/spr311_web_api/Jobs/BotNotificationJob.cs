using Quartz;
using spr311_web_api.BLL.Services.Bot;
using Telegram.Bot;

namespace spr311_web_api.Jobs
{
    public class BotNotificationJob : IJob
    {
        private readonly TelegramBotClient _client;

        public BotNotificationJob(ITelegramBotService botService)
        {
            _client = botService.GetTelegramBot();
        }

        public async Task Execute(IJobExecutionContext context)
        {
            long chatId = 431373362;
            await _client.SendMessage(chatId, "Quartz працює");
        }
    }
}
