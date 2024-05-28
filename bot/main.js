import { Markup, Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import dotenv from 'dotenv'

dotenv.config()

const webAppUrl = ''
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('start', (ctx) => {
    ctx.reply(
        'Welcome to the bot!',
        Markup.keyboard([
            Markup.button.webApp('Send message', `${webAppUrl}/`)
        ])
    )
})

bot.launch()
