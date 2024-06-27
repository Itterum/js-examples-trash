import { Markup, Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import dotenv from 'dotenv'

dotenv.config()

const webAppUrl = 'https://itterum.github.io/test_app/'
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('start', (ctx) => {
    return ctx.reply(
        "Open WebApp",
        Markup.inlineKeyboard([
            Markup.button.webApp(
                "Open",
                webAppUrl
            ),
        ]),
        Markup.removeKeyboard(),
    )
})

bot.on("message", async (ctx) => {
    console.log(ctx.message.web_app_data)
    return ctx.reply(ctx.message.web_app_data.data)
})

bot.launch()
