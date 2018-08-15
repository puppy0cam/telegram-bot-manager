import "request-promise";
import { Telegram } from "./tgtypes";
declare const bots: Map<string,Bot>;
/**
 * creates a promise, and resolves it after a period of time specified has occured.
 */
declare function wait(time: number): Promise<void>;
declare function tickBot(token: string): Promise<void>;
declare const tickingBots: Map<string,boolean>;
declare class Bot {
    shouldTick: boolean;
    events: BotEvents;
    highestUpdate: number;
    constructor(token: string);
    doRequest(method: string, options?: object, timeout?: number): Promise<{
        ok: false;
        error_code: number;
        description: string;
    }|{
        ok: true;
        result: any;
    }>;
    getUpdates(options?: Telegram.getUpdates): Promise<any>;
    setWebhook(options?: Telegram.setWebhook): Promise<any>;
    deleteWebhook(options?: Telegram.deleteWebhook): Promise<any>;
    getWebhookInfo(options?: Telegram.getWebhookInfo): Promise<any>;
    getMe(options?: Telegram.getMe): Promise<any>;
    sendMessage(options?: Telegram.sendMessage): Promise<any>;
    forwardMessage(options?: Telegram.forwardMessage): Promise<any>;
    sendPhoto(options?: Telegram.sendPhoto): Promise<any>;
    sendAudio(options?: Telegram.sendAudio): Promise<any>;
    sendDocument(options?: Telegram.sendDocument): Promise<any>;
    sendVideo(options?: Telegram.sendVideo): Promise<any>;
    sendAnimation(options?: Telegram.sendAnimation): Promise<any>;
    sendVoice(options?: Telegram.sendVoice): Promise<any>;
    sendVideoNote(options?: Telegram.sendVideoNote): Promise<any>;
    sendMediaGroup(options?: Telegram.sendMediaGroup): Promise<any>;
    sendLocation(options?: Telegram.sendLocation): Promise<any>;
    editMessageLiveLocation(options?: Telegram.editMessageLiveLocation): Promise<any>;
    stopMessageLiveLocation(options?: Telegram.stopMessageLiveLocation): Promise<any>;
    sendVenue(options?: Telegram.sendVenue): Promise<any>;
    sendContact(options?: Telegram.sendContact): Promise<any>;
    sendChatAction(options?: Telegram.sendChatAction): Promise<any>;
    getUserProfilePhotos(options?: Telegram.getUserProfilePhotos): Promise<any>;
    getFile(options?: Telegram.getFile): Promise<any>;
    kickChatMember(options?: Telegram.kickChatMember): Promise<any>;
    unbanChatMember(options?: Telegram.unbanChatMember): Promise<any>;
    restrictChatMember(options?: Telegram.restrictChatMember): Promise<any>;
    promoteChatMember(options?: Telegram.promoteChatMember): Promise<any>;
    exportChatInviteLink(options?: Telegram.exportChatLink): Promise<any>;
    setChatPhoto(options?: Telegram.setChatPhoto): Promise<any>;
    deleteChatPhoto(options?: Telegram.deleteChatPhoto): Promise<any>;
    setChatTitle(options?: Telegram.setChatTitle): Promise<any>;
    setChatDescription(options?: Telegram.setChatDescription): Promise<any>;
    pinChatMessage(options?: Telegram.pinChatMessage): Promise<any>;
    unpinChatMessage(options?: Telegram.unpinChatMessage): Promise<any>;
    leaveChat(options?: Telegram.leaveChat): Promise<any>;
    getChat(options?: Telegram.getChat): Promise<any>;
    getChatAdministrators(options?: Telegram.getChatAdministrators): Promise<any>;
    getChatMembersCount(options?: Telegram.getChatMembersCount): Promise<any>;
    getChatMember(options?: Telegram.getChatMember): Promise<any>;
    setChatStickerSet(options?: Telegram.setChatStickerSet): Promise<any>;
    deleteChatStickerSet(options?: Telegram.deleteChatStickerSet): Promise<any>;
    answerCallbackQuery(options?: Telegram.answerCallbackQuery): Promise<any>;
    editMessageText(options?: Telegram.editMessageText): Promise<any>;
    editMessageCaption(options?: Telegram.editMessageCaption): Promise<any>;
    editMessageMedia(options?: Telegram.editMessageMedia): Promise<any>;
    editMessageReplyMarkup(options?: Telegram.editMessageReplyMarkup): Promise<any>;
    deleteMessage(options?: Telegram.deleteMessage): Promise<any>;
    sendSticker(options?: Telegram.sendSticker): Promise<any>;
    getStickerSet(options?: Telegram.getStickerSet): Promise<any>;
    uploadStickerFile(options?: Telegram.uploadStickerFile): Promise<any>;
    createNewStickerSet(options?: Telegram.createNewStickerSet): Promise<any>;
    addStickerToSet(options?: Telegram.addStickerToSet): Promise<any>;
    setStickerPositionInSet(options?: Telegram.setStickerPositionInSet): Promise<any>;
    deleteStickerFromSet(options?: Telegram.deleteStickerFromSet): Promise<any>;
    answerInlineQuery(options?: Telegram.answerInlineQuery): Promise<any>;
    sendInvoice(options?: Telegram.sendInvoice): Promise<any>;
    answerShippingQuery(options?: Telegram.answerShippingQuery): Promise<any>;
    answerPreCheckoutQuery(options?: Telegram.answerPreCheckoutQuery): Promise<any>;
    setPassportDataErrors(options?: Telegram.setPassportDataErrors): Promise<any>;
    sendGame(options?: Telegram.sendGame): Promise<any>;
    setGameScore(options?: Telegram.setGameScore): Promise<any>;
    getGameHighScores(options?: Telegram.getGameHighScores): Promise<any>;
}
declare class BotEvents {
    subscriptions: {
        callback(update:Telegram.Update):void,
        callers:(string|RegExp)[],
        identifier:symbol
    };
    constructor();
    /**
     * subscribes your callback to an event that occurs.
     */
    subscribe(callback: (update:Telegram.Update)=>void, ...events: (string|RegExp)[]): symbol;
    /**
     * unsubscribes an event from the list
     */
    unsubscribe(identifier: symbol): boolean;
    static isMessageType(data: Telegram.Message): boolean;
    pushEvent(update: Telegram.Update): void;
}
export = Bot;