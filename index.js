const fs_extra = require("fs-extra");
const request = require("request-promise");
const bots = new Map();
function wait(time){
    return new Promise(function(resolve,reject){
        time = time-0;
        time = Math.trunc(time);
        if(isFinite(time) && time > 0){
            setTimeout(function(){
                resolve(true);
            },time);
        } else {
            reject(new RangeError("Bad time specified"));
        }
    });
}
async function tickBot(token){
    try {
        if(tickingBots.get(token)) return;
        tickingBots.set(token,true);
        let currentUpdate = bots.get(token).highestUpdate;
        let optInQuery = "";
        if(currentUpdate !== 0){
            optInQuery = "?offset=" + (currentUpdate + 1);
        }
        var response = await request(`https://api.telegram.org/bot${token}/getUpdates${optInQuery}`,{
            json: true,
            timeout: 60000
        });
        if(!response.ok){
            console.warn("Ticking of a bot noticed telegram informed that the request was incorrect")
        } else {
            var botA = bots.get(token)
            for (let i of response.result){
                if(i.update_id > botA.highestUpdate) botA.highestUpdate = i.update_id;
                try {
                    botA.events.pushEvent(i);
                }catch(e){
                    console.warn(e);
                }
            }
        }
        tickingBots.set(token,false);
    } catch(e){
        await wait(1000);
        try {
            await tickBot(token);
        } catch(e){
            tickingBots.set(token,false);
            console.warn("Ticking of a bot failed due to some network error!");
        }
    }
}
const tickingBots = new Map();
function getToken(bot){
    for (let i of bots.entries()){
        if(i[0] === bot) return i[1];
        if(i[1] === bot) return i[0];
    }
}
class Bot {
    constructor(token){
        if(bots.has(token)) return bots.get(token);
        bots.set(token,this);
        tickingBots.set(token,false);
        this.shouldTick = true;
        this.events = new BotEvents();
        this.highestUpdate = 0;
    }
    async doRequest(method,options={},timeout=30000){
        let form = await fs_extra.mkdtemp("form_data");
        let streams = {};
        for (let i in options){
            if(options[i] instanceof Buffer){
                await fs_extra.writeFile("./" + form + "/" + i,options[i]);
            }
            streams[i] = options[i];
        }
        for (let i of await fs_extra.readdir("./" + form)){
            streams[i] = fs_extra.createReadStream("./" + form + "/" + i);
        }
        let result = await request.post({
            url: `https://api.telegram.org/bot${getToken(this)}/${method}`,
            formData: streams,
            timeout
        });
        for (let i of await fs_extra.readdir("./" + form)){
            await fs_extra.remove("./" + form + '/' + i);
        }
        await fs_extra.rmdir("./" + form);
        try {
            return JSON.parse(result);
        } catch(e){
            return result;
        }
    }
    async getUpdates(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options,60000);
    }
    async setWebhook(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async deleteWebhook(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async getWebhookInfo(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async getMe(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async sendMessage(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async forwardMessage(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async sendPhoto(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async sendAudio(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async sendDocument(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async sendVideo(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async sendAnimation(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async sendVoice(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async sendVideoNote(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async sendMediaGroup(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async sendLocation(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async editMessageLiveLocation(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async stopMessageLiveLocation(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async sendVenue(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async sendContact(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async sendChatAction(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async getUserProfilePhotos(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async getFile(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async kickChatMember(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async unbanChatMember(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async restrictChatMember(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async promoteChatMember(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async exportChatInviteLink(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async setChatPhoto(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async deleteChatPhoto(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async setChatTitle(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async setChatDescription(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async pinChatMessage(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async unpinChatMessage(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async leaveChat(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async getChat(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async getChatAdministrators(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async getChatMembersCount(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async getChatMember(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async setChatStickerSet(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async deleteChatStickerSet(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async answerCallbackQuery(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async editMessageText(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async editMessageCaption(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async editMessageMedia(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async editMessageReplyMarkup(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async deleteMessage(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async sendSticker(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async getStickerSet(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async uploadStickerFile(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async createNewStickerSet(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async addStickerToSet(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async setStickerPositionInSet(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async deleteStickerFromSet(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async answerInlineQuery(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async sendInvoice(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async answerShippingQuery(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async answerPreCheckoutQuery(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async setPassportDataErrors(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async sendGame(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async setGameScore(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
    async getGameHighScores(options={}){
        return await this.doRequest(new Error().stack.match(/(?<=at Bot\.).*(?= )/),options);
    }
}
class BotEvents {
    constructor(){
        this.subscriptions = [];
    }
    subscribe(callback,...events){
        if(typeof callback !== "function") throw new TypeError("Callback not a function");
        let identifier = Symbol("A callback for a bot event.");
        this.subscriptions.push({
            callback,
            callers: events,
            identifier
        });
        return identifier
    }
    unsubscribe(identifier){
        let success = false;
        for (let i in this.subscriptions){
            if(this.subscriptions[i].identifier === identifier){
                success = true;
                this.subscriptions[i].identifier = null;
                this.subscriptions[i].callback = function(){};
                this.subscriptions[i].callers = [];
            }
        }
        return success;
    }
    static isMessageType(data){
        if(data && data.text) return true;
        return false;
    }
    pushEvent(update){
        this.subscriptions.forEach(function(sub){
            let shouldPushUpdate = false;
            for (let search of sub.callers){
                for (let j in update){
                    if(j === search){
                        shouldPushUpdate = true;
                        break;
                    }
                }
                if(shouldPushUpdate) break;
                if(search === "text" && (update.channel_post || update.message)){
                    shouldPushUpdate = true;
                    break;
                } else if(search === "edit" && (update.edited_message || update.edited_channel_post)){
                    shouldPushUpdate = true;
                    break;
                } else if(update.message && update.message.text){
                    let searchResult = update.message.text.search(search);
                    if(typeof search === "string" && search.startsWith("/")){
                        if(searchResult === 0){
                            shouldPushUpdate = true;
                            break;
                        }
                    } else if(typeof search === "string"){
                        if(searchResult !== -1){
                            shouldPushUpdate = true;
                            break;
                        }
                    } else if(search instanceof RegExp){
                        if(search.exec(update.message.text)){
                            shouldPushUpdate = true;
                            break;
                        }
                    }
                } else if(update.channel_post && update.channel_post.text){
                    let searchResult = update.channel_post.text.search(search);
                    if(typeof search === "string" && search.startsWith("/")){
                        if(searchResult === 0){
                            shouldPushUpdate = true;
                            break;
                        }
                    } else if(typeof search === "string"){
                        if(searchResult !== -1){
                            shouldPushUpdate = true;
                            break;
                        }
                    } else if(search instanceof RegExp){
                        if(search.exec(update.channel_post.text)){
                            shouldPushUpdate = true;
                            break;
                        }
                    }
                }
            }
            if(shouldPushUpdate){
                try {
                    let a = sub.callback(update);
                    if(a instanceof Promise){
                        a.catch(function(e){
                            console.warn("Callback threw an error: ",e);
                        });
                    }
                } catch(e){
                    console.warn("Callback threw an error: ",e);
                }
            }
        });
    }
}
module.exports = Bot
setInterval(function(){
    tickingBots.forEach(function(val,pos){
        if(!val && bots.get(pos).shouldTick){
            tickBot(pos).catch(console.warn);
        }
    })
},50);