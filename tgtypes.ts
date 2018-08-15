export module Telegram {
    /**
     * This object represents an incoming update.
     * At most one of the optional parameters can be present in any given update.
     */
    export interface Update {
        /**
         * The update‘s unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you’re using Webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.
         */
        update_id: number;
        /**
         * New incoming message of any kind — text, photo, sticker, etc.
         */
        message?: Message;
        /**
         * New version of a message that is known to the bot and was edited
         */
        edited_message?: Message;
        /**
         * New incoming channel post of any kind — text, photo, sticker, etc.
         */
        channel_post?: Message;
        /**
         * New version of a channel post that is known to the bot and was edited
         */
        edited_channel_post?: Message;
        /**
         * Optional. New incoming inline query
         */
        inline_query?: InlineQuery;
        /**
         * The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.
         */
        chosen_inline_result?: ChosenInlineResult;
        /**
         * New incoming callback query
         */
        callback_query?: CallbackQuery;
        /**
         * New incoming shipping query. Only for invoices with flexible price
         */
        shipping_query?: ShippingQuery;
        /**
         * New incoming pre-checkout query. Contains full information about checkout
         */
        pre_checkout_query?: PreCheckoutQuery;
    }
    /**
     * Contains information about the current status of a webhook.
     */
    export interface WebhookInfo {
        /**
         * Webhook URL, may be empty if webhook is not set up
         */
        url: string;
        /**
         * 	True, if a custom certificate was provided for webhook certificate checks
         */
        has_custom_certificate: boolean;
        /**
         * Number of updates awaiting delivery
         */
        pending_update_count: number;
        /**
         * Unix time for the most recent error that happened when trying to deliver an update via webhook
         */
        last_error_data?: number;
        /**
         * Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook
         */
        last_error_message?: string;
        /**
         * Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
         */
        max_connections?: number;
        /**
         * A list of update types the bot is subscribed to. Defaults to all update types
         */
        allowed_updates?: string[];
    }
    /**
     * This object represents a Telegram user or bot.
     */
    export interface User {
        /**
         * Unique identifier for this user or bot
         */
        id: number;
        /**
         * True, if this user is a bot
         */
        is_bot: boolean;
        /**
         * 	User‘s or bot’s first name
         */
        first_name: string;
        /**
         * User‘s or bot’s last name
         */
        last_name?: string;
        /**
         * User‘s or bot’s username
         */
        username?: string;
        /**
         * [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the user's language
         */
        language_code?: string;
    }
    /**
     * This object represents a chat.
     */
    export interface Chat {
        /**
         * Unique identifier for this chat. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
         */
        id: number;
        /**
         * Type of chat, can be either “private”, “group”, “supergroup” or “channel”
         */
        type: string;
        /**
         * Title, for supergroups, channels and group chats
         */
        title?: string;
        /**
         * Username, for private chats, supergroups and channels if available
         */
        username?: string;
        /**
         * First name of the other party in a private chat
         */
        first_name?: string;
        /**
         * Last name of the other party in a private chat
         */
        last_name?: string;
        /**
         * True if a group has ‘All Members Are Admins’ enabled.
         */
        all_members_are_administrators?: boolean;
        /**
         * Chat photo. Returned only in getChat.
         */
        photo?: ChatPhoto;
        /**
         * Description, for supergroups and channel chats. Returned only in getChat.
         */
        description?: string;
        /**
         * Chat invite link, for supergroups and channel chats. Returned only in getChat.
         */
        invite_link?: string;
        /**
         * Pinned message, for supergroups and channel chats. Returned only in getChat.
         */
        pinned_message?: Message;
        /**
         * For supergroups, name of group sticker set. Returned only in getChat.
         */
        sticker_set_name?: string;
        /**
         * True, if the bot can change the group sticker set. Returned only in getChat.
         */
        can_set_sticker_set?: boolean;
    }
    /**
     * This object represents a message.
     */
    export interface Message {
        /**
         * Unique message identifier inside this chat
         */
        message_id: number;
        /**
         * Sender, empty for messages sent to channels
         */
        from?: User;
        /**
         * Date the message was sent in Unix time
         */
        date: number;
        /**
         * Conversation the message belongs to
         */
        chat: Chat;
        /**
         * For forwarded messages, sender of the original message
         */
        forward_from?: User;
        /**
         * For messages forwarded from channels, information about the original channel
         */
        forward_from_chat?: Chat;
        /**
         * For messages forwarded from channels, identifier of the original message in the channel
         */
        forward_from_message_id?: number;
        /**
         * For messages forwarded from channels, signature of the post author if present
         */
        forward_signature?: string;
        /**
         * For forwarded messages, date the original message was sent in Unix time
         */
        forward_date?: number;
        /**
         * For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
         */
        reply_to_message?: Message;
        /**
         * Date the message was last edited in Unix time
         */
        edit_date?: number;
        /**
         * The unique identifier of a media message group this message belongs to
         */
        media_group_id?: string;
        /**
         * Signature of the post author for messages in channels
         */
        author_signature?: string;
        /**
         * For text messages, the actual UTF-8 text of the message, 0-4096 characters.
         */
        text?: string;
        /**
         * For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
         */
        entities?: MessageEntity[];
        /**
         * For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
         */
        caption_entities?: MessageEntity[];
        /**
         * Message is an audio file, information about the file
         */
        audio?: Audio;
        /**
         * Message is a general file, information about the file
         */
        document?: Document;
        /**
         * Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set
         */
        animation?: Animation;
        /**
         * Message is a game, information about the game. [More about games »](https://core.org/bots/api#games)
         */
        game?: Game;
        /**
         * Message is a photo, available sizes of the photo
         */
        photo?: PhotoSize[];
        /**
         * Message is a sticker, information about the sticker
         */
        sticker?: Sticker;
        /**
         * Message is a video, information about the video
         */
        video?: Video;
        /**
         * Message is a voice message, information about the file
         */
        voice?: Voice;
        /**
         * Message is a [video note](https://org/blog/video-messages-and-telescope), information about the video message
         */
        video_note?: VideoNote;
        /**
         * Caption for the audio, document, photo, video or voice, 0-200 characters
         */
        caption?: string;
        /**
         * Message is a shared contact, information about the contact
         */
        contact?: Contact;
        /**
         * Message is a shared location, information about the location
         */
        location?: Location;
        /**
         * Message is a venue, information about the venue
         */
        venue?: Venue;
        /**
         * New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)
         */
        new_chat_members?: User[];
        /**
         * A member was removed from the group, information about them (this member may be the bot itself)
         */
        left_chat_member?: User;
        /**
         * A chat title was changed to this value
         */
        new_chat_title?: string;
        /**
         * A chat photo was change to this value
         */
        new_chat_photo?: PhotoSize[];
        /**
         * Service message: the chat photo was deleted
         */
        delete_chat_photo?: boolean;
        /**
         * Service message: the group has been created
         */
        group_chat_created?: boolean;
        /**
         * Service message: the supergroup has been created. This field can‘t be received in a message coming through updates, because bot can’t be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.
         */
        supergroup_chat_created?: boolean;
        /**
         * Service message: the channel has been created. This field can‘t be received in a message coming through updates, because bot can’t be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.
         */
        channel_chat_created?: boolean;
        /**
         * The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
         */
        migrate_to_chat_id?: number;
        /**
         * The supergroup has been migrated from a group with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
         */
        migrate_from_chat_id?: number;
        /**
         * Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply.
         */
        pinned_message?: Message;
        /**
         * Message is an invoice for a [payment](https://core.org/bots/api#payments), information about the invoice. [More about payments »](https://core.org/bots/api#payments)
         */
        invoice?: Invoice;
        /**
         * Message is a service message about a successful payment, information about the payment. [More about payments »](https://core.org/bots/api#payments)
         */
        successful_payment?: SuccessfulPayment;
        /**
         * The domain name of the website on which the user has logged in. [More about Telegram Login »](https://core.org/widgets/login)
         */
        connected_website?: string;
        /**
         * Telegram Passport data
         */
        passport_data?: PassportData;
    }
    /**
     * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
     */
    export interface MessageEntity {
        /**
         * Type of the entity. Can be mention (`@username`), hashtag, cashtag, bot_command, url, email, phone_number, bold (bold text), italic (italic text), code (monowidth string), pre (monowidth block), text_link (for clickable text URLs), text_mention (for users [without usernames](https://org/blog/edit#new-mentions))
         */
        type: string;
        /**
         * Offset in UTF-16 code units to the start of the entity
         */
        offset: number;
        /**
         * Length of the entity in UTF-16 code units
         */
        length: number;
        /**
         * For “text_link” only, url that will be opened after user taps on the text
         */
        url?: string;
        /**
         * For “text_mention” only, the mentioned user
         */
        user?: User;
    }
    /**
     * This object represents one size of a photo or a [file](https://core.org/bots/api#document) / [sticker](https://core.org/bots/api#sticker) thumbnail.
     */
    export interface PhotoSize {
        /**
         * Unique identifier for this file
         */
        file_id: string;
        /**
         * Photo width
         */
        width: number;
        /**
         * Photo height
         */
        height: number;
        /**
         * File size
         */
        file_size?: number;
    }
    /**
     * This object represents an audio file to be treated as music by the Telegram clients.
     */
    export interface Audio {
        /**
         * Unique identifier for this file
         */
        file_id: string;
        /**
         * Duration of the audio in seconds as defined by sender
         */
        duration: number;
        /**
         * Performer of the audio as defined by sender or by audio tags
         */
        performer?: string;
        /**
         * Title of the audio as defined by sender or by audio tags
         */
        title?: string;
        /**
         * MIME type of the file as defined by sender
         */
        mime_type?: string;
        /**
         * File size
         */
        file_size?: number;
        /**
         * Thumbnail of the album cover to which the music file belongs
         */
        thumb?: PhotoSize;
    }
    /**
     * This object represents a general file (as opposed to [photos](https://core.org/bots/api#photosize), [voice messages](https://core.org/bots/api#voice) and [audio files](https://core.org/bots/api#audio)).
     */
    export interface Document {
        /**
         * Unique file identifier
         */
        file_id: string;
        /**
         * Document thumbnail as defined by sender
         */
        thumb?: PhotoSize;
        /**
         * Original filename as defined by sender
         */
        file_name?: string;
        /**
         * MIME type of the file as defined by sender
         */
        mime_type?: string;
        /**
         * File size
         */
        file_size?: number;
    }
    /**
     * This object represents a video file.
     */
    export interface Video {
        /**
         * Unique identifier for this file
         */
        file_id: string;
        /**
         * Video width as defined by sender
         */
        width: number;
        /**
         * Video height as defined by sender
         */
        height: number;
        /**
         * Duration of the video in seconds as defined by sender
         */
        duration: number;
        /**
         * Video thumbnail
         */
        thumb?: PhotoSize;
        /**
         * Mime type of a file as defined by sender
         */
        mime_type?: string;
        /**
         * File size
         */
        file_size?: number;
    }
    /**
     * This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
     */
    export interface Animation {
        /**
         * Unique identifier for this file
         */
        file_id: string;
        /**
         * Video width as defined by sender
         */
        width: number;
        /**
         * Video height as defined by sender
         */
        height: number;
        /**
         * Duration of the video in seconds as defined by sender
         */
        duration: number;
        /**
         * Video thumbnail
         */
        thumb?: PhotoSize;
        /**
         * Original animation filename as defined by sender
         */
        file_name?: string;
        /**
         * Mime type of a file as defined by sender
         */
        mime_type?: string;
        /**
         * File size
         */
        file_size?: number;
    }
    /**
     * This object represents a voice note.
     */
    export interface Voice {
        /**
         * Unique identifier for this file
         */
        file_id: string;
        /**
         * Duration of the audio in seconds as defined by sender
         */
        duration: number;
        /**
         * MIME type of the file as defined by sender
         */
        mime_type?: string;
        /**
         * File size
         */
        file_size?: number;
    }
    /**
     * This object represents a [video message](https://org/blog/video-messages-and-telescope) (available in Telegram apps as of [v.4.0](https://org/blog/video-messages-and-telescope)).
     */
    export interface VideoNote {
        /**
         * Unique identifier for this file
         */
        file_id: string;
        /**
         * Video width and height as defined by sender
         * 
         * **COULD BE A DISCREPENCY IN API DOCUMENTATION**
         */
        length: number;
        /**
         * Duration of the audio in seconds as defined by sender
         */
        duration: number;
        /**
         * MIME type of the file as defined by sender
         */
        mime_type?: string;
        /**
         * File size
         */
        file_size?: number;
    }
    /**
     * This object represents a phone contact.
     */
    export interface Contact {
        /**
         * Contact's phone number
         */
        phone_number: string;
        /**
         * 	Contact's first name
         */
        first_name: string;
        /**
         * Contact's last name
         */
        last_name?: string;
        /**
         * Contact's user identifier in Telegram
         */
        user_id?: number;
        /**
         * Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard)
         */
        vcard?: string;
    }
    /**
     * This object represents a point on the map.
     */
    export interface Location {
        /**
         * Longitude as defined by sender
         */
        longitude: number;
        /**
         * Latitude as defined by sender
         */
        latitude: number;
    }
    /**
     * This object represents a venue.
     */
    export interface Venue {
        /**
         * Venue location
         */
        location: Location;
        /**
         * Name of the venue
         */
        title: string;
        /**
         * Address of the venue
         */
        address: string;
        /**
         * Foursquare identifier of the venue
         */
        foursquare_id?: string;
        /**
         * Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
         */
        foursquare_type?: string;
    }
    /**
     * This object represent a user's profile pictures.
     */
    export interface UserProfilePhotos {
        /**
         * Total number of profile pictures the target user has
         */
        total_count: number;
        /**
         * Requested profile pictures (in up to 4 sizes each)
         */
        photos: PhotoSize[][];
    }
    /**
     * This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.org/bots/api#getfile).
     * 
     * >Maximum file size to download is 20 MB
     */
    export interface File {
        /**
         * Unique identifier for this file
         */
        file_id: string;
        /**
         * File size, if known
         */
        file_size?: number;
        /**
         * File path. Use `https://api.org/file/bot<token>/<file_path>` to get the file.
         */
        file_path?: string;
    }
    /**
     * This object represents a [custom keyboard](https://core.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.org/bots#keyboards) for details and examples).
     */
    export interface ReplyKeyboardMarkup {
        /**
         * Array of button rows, each represented by an Array of KeyboardButton objects
         */
        keyboard: KeyboardButton[][];
        /**
         * Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to _false_, in which case the custom keyboard is always of the same height as the app's standard keyboard.
         */
        resize_keyboard?: boolean;
        /**
         * Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat – the user can press a special button in the input field to see the custom keyboard again. Defaults to _false_.
         */
        one_time_keyboard?: boolean;
        /**
         * Optional. Use this parameter if you want to show the keyboard to specific users only. Targets: 
         * 
         * >**1.** users that are &#64;mentioned in the text of the [Message](https://core.org/bots/api#message) object;
         * 
         * >**2.** if the bot's message is a reply (has _reply&#95;to&#95;message&#95;id_), sender of the original message.
         * 
         * _Example:_ A user requests to change the bot‘s language, bot replies to the request with a keyboard to select the new language. Other users in the group don’t see the keyboard.
         */
        selective?: boolean;
    }
    /**
     * This object represents one button of the reply keyboard. For simple text buttons String can be used instead of this object to specify text of the button. Optional fields are mutually exclusive.
     * 
     * **Note**: _request&#95;contact_ and _request&#95;location_ options will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
     */
    export interface KeyboardButton {
        /**
         * Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed
         */
        text: string;
        /**
         * If _True_, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only
         */
        request_contact: boolean;
        /**
         * If _True_, the user's current location will be sent when the button is pressed. Available in private chats only
         */
        request_location?: boolean;
    }
    /**
     * Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.org/bots/api#replykeyboardmarkup)).
     */
    export interface ReplyKeyboardRemove {
        /**
         * Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one&#95;time&#95;keyboard in [ReplyKeyboardMarkup](https://core.org/bots/api#replykeyboardmarkup))
         */
        remove_keyboard: boolean;
        /**
         * Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are &#64;mentioned in the _text_ of the [Message](https://core.org/bots/api#message) object; 2) if the bot's message is a reply (has _reply&#95;to&#95;message&#95;id_), sender of the original message.
         * 
         * _Example:_ A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet.
         */
        selective?: boolean;
    }
    /**
     * This object represents an [inline keyboard](https://core.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.
     * 
     * **Note**: This will only work in Telegram versions released after 9 April, 2016. Older clients will display _unsupported message._
     */
    export interface InlineKeyboardMarkup {
        /**
         * Array of button rows, each represented by an Array of [InlineKeyboardButton](https://core.org/bots/api#inlinekeyboardbutton) objects
         */
        inline_keyboard: InlineKeyboardButton[][];
    }
    /**
     * This object represents one button of an inline keyboard. You **must** use exactly one of the optional fields.
     */
    export interface InlineKeyboardButton {
        /**
         * Label text on the button
         */
        text: string;
        /**
         * HTTP or tg:// url to be opened when button is pressed
         */
        url?: string;
        /**
         * Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes
         */
        callback_data?: string;
        /**
         * If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot‘s username and the specified inline query in the input field. Can be empty, in which case just the bot’s username will be inserted.
         * 
         * **Note**: This offers an easy way for users to start using your bot in [inline mode](https://core.org/bots/inline) when they are currently in a private chat with it. Especially useful when combined with [switch_pm…](https://core.org/bots/api#answerinlinequery) actions – in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen.
         */
        switch_inline_query?: string;
        /**
         * If set, pressing the button will insert the bot‘s username and the specified inline query in the current chat's input field. Can be empty, in which case only the bot’s username will be inserted.
         * 
         * This offers a quick way for the user to open your bot in inline mode in the same chat – good for selecting something from multiple options.
         */
        switch_inline_query_current_chat?: string;
        /**
         * Description of the game that will be launched when the user presses the button.
         * 
         * **NOTE**: This type of button **must** always be the first button in the first row.
         */
        callback_game?: CallbackGame;
        /**
         * Specify True, to send a Pay button.
         * 
         * **NOTE**: This type of button **must** always be the first button in the first row.
         */
        pay?: boolean;
    }
    /**
     * This object represents an incoming callback query from a callback button in an [inline keyboard](https://core.org/bots#inline-keyboards-and-on-the-fly-updating). If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in [inline mode](https://core.org/bots/api#inline-mode)), the field _inline&#95;message&#95;id_ will be present. Exactly one of the fields _data_ or _game&#95;short&#95;name_ will be present.
     * 
     * **NOTE**: After the user presses a callback button, Telegram clients will display a progress bar until you call [answerCallbackQuery](https://core.org/bots/api#answercallbackquery). It is, therefore, necessary to react by calling [answerCallbackQuery](https://core.org/bots/api#answercallbackquery) even if no notification to the user is needed (e.g., without specifying any of the optional parameters).
     */
    export interface CallbackQuery {
        /**
         * Unique identifier for this query
         */
        id: string;
        /**
         * Sender
         */
        from: User;
        /**
         * Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old
         */
        message?: Message;
        /**
         * Identifier of the message sent via the bot in inline mode, that originated the query.
         */
        inline_message_id?: string;
        /**
         * Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in [games](https://core.org/bots/api#games).
         */
        chat_instance: string;
        /**
         * Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field.
         */
        data?: string;
        /**
         * Short name of a [Game](https://core.org/bots/api#games) to be returned, serves as the unique identifier for the game
         */
        game_short_name?: string;
    }
    /**
     * Upon receiving a message with this object, Telegram clients will display a reply export interface to the user (act as if the user has selected the bot‘s message and tapped ’Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](https://core.org/bots#privacy-mode).
     * 
     * >**Example**: A [poll bot](https://t.me/PollBot) for groups runs in privacy mode (only receives commands, replies to its messages and mentions). There could be two ways to create a new poll:
     * 
     * >>Explain the user how to send a command with parameters (e.g. /newpoll question answer1 answer2). May be appealing for hardcore users but lacks modern day polish.
     * 
     * >>Guide the user through a step-by-step process. ‘Please send me your question’, ‘Cool, now let’s add the first answer option‘, ’Great. Keep adding answer options, then send /done when you‘re ready’.
     * 
     * The last option is definitely more attractive. And if you use [ForceReply](https://core.org/bots/api#forcereply) in your bot‘s questions, it will receive the user’s answers even if it only receives replies, commands and mentions — without any extra work for the user.
     */
    export interface ForceReply {
        /**
         * Shows reply export interface to the user, as if they manually selected the bot‘s message and tapped ’Reply'
         */
        force_reply: boolean;
        /**
         * Use this parameter if you want to force reply from specific users only. Targets: 1) users that are &#64;mentioned in the _text_ of the [Message](https://core.org/bots/api#message) object; 2) if the bot's message is a reply (has _reply&#95;to&#95;message&#95;id_), sender of the original message.
         */
        selective?: boolean;
    }
    /**
     * This object represents a chat photo.
     */
    export interface ChatPhoto {
        /**
         * Unique file identifier of small (160x160) chat photo. This file_id can be used only for photo download.
         */
        small_file_id: string;
        /**
         * Unique file identifier of big (640x640) chat photo. This file_id can be used only for photo download.
         */
        big_file_id: string;
    }
    /**
     * This object contains information about one member of a chat.
     */
    export interface ChatMember {
        /**
         * Information about the user
         */
        user: User;
        /**
         * The member's status in the chat. Can be “creator”, “administrator”, “member”, “restricted”, “left” or “kicked”
         */
        status: string;
        /**
         * Restricted and kicked only. Date when restrictions will be lifted for this user, unix time
         */
        until_date?: number;
        /**
         * Administrators only. True, if the bot is allowed to edit administrator privileges of that user
         */
        can_be_edited?: boolean;
        /**
         * Administrators only. True, if the administrator can change the chat title, photo and other settings
         */
        can_change_info?: boolean;
        /**
         * Administrators only. True, if the administrator can post in the channel, channels only
         */
        can_post_messages?: boolean;
        /**
         * Administrators only. True, if the administrator can edit messages of other users and can pin messages, channels only
         */
        can_edit_messages?: boolean;
        /**
         * Administrators only. True, if the administrator can delete messages of other users
         */
        can_delete_messages?: boolean;
        /**
         * Administrators only. True, if the administrator can invite new users to the chat
         */
        can_invite_users?: boolean;
        /**
         * Administrators only. True, if the administrator can restrict, ban or unban chat members
         */
        can_restrict_members?: boolean;
        /**
         * Administrators only. True, if the administrator can pin messages, supergroups only
         */
        can_pin_messages?: boolean;
        /**
         * Administrators only. True, if the administrator can add new administrators with a subset of his own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user)
         */
        can_promote_members?: boolean;
        /**
         * Restricted only. True, if the user can send text messages, contacts, locations and venues
         */
        can_send_messages?: boolean;
        /**
         * Restricted only. True, if the user can send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages
         */
        can_send_media_messages?: boolean;
        /**
         * Restricted only. True, if the user can send animations, games, stickers and use inline bots, implies can_send_media_messages
         */
        can_send_other_messages?: boolean;
        /**
         * Restricted only. True, if user may add web page previews to his messages, implies can_send_media_messages
         */
        can_add_web_page_previews?: boolean;
    }
    /**
     * Contains information about why a request was unsuccessful.
     */
    export interface ResponseParameters {
        /**
         * The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
         */
        migrate_to_chat_id?: boolean;
        /**
         * In case of exceeding flood control, the number of seconds left to wait before the request can be repeated
         */
        retry_after?: number;
    }
    /**
     * Represents a photo to be sent.
     */
    export interface InputMediaPhoto {
        /**
         * Type of the result, must be photo
         */
        type: string;
        /**
         * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. [More info on Sending Files »](https://core.org/bots/api#sending-files)
         */
        media: string;
        /**
         * Caption of the photo to be sent, 0-200 characters
         */
        caption?: string;
        /**
         * Send [Markdown](https://core.org/bots/api#markdown-style) or [HTML](https://core.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.org/bots/api#formatting-options) in the media caption.
         */
        parse_mode?: string;
    }
    /**
     * Represents a video to be sent.
     */
    export interface InputMediaVideo {
        /**
         * Type of the result, must be video
         */
        type: string;
        /**
         * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. [More info on Sending Files »](https://core.org/bots/api#sending-files)
         */
        media: string;
        /**
         * Thumbnail of the file sent. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 90. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.org/bots/api#sending-files)
         */
        thumb?: InputFile|string;
        /**
         * Caption of the video to be sent, 0-200 characters
         */
        caption?: string;
        /**
         * Send [Markdown](https://core.org/bots/api#markdown-style) or [HTML](https://core.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.org/bots/api#formatting-options) in the media caption.
         */
        parse_mode?: string;
        /**
         * Video width
         */
        width?: number;
        /**
         * Video height
         */
        height?: number;
        /**
         * Video duration
         */
        duration?: number;
        /**
         * Pass True, if the uploaded video is suitable for streaming
         */
        supports_streaming?: boolean;
    }
    /**
     * Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
     */
    export interface InputMediaAnimation {
        /**
         * Type of the result, must be video
         */
        type: string;
        /**
         * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. [More info on Sending Files »](https://core.org/bots/api#sending-files)
         */
        media: string;
        /**
         * Thumbnail of the file sent. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 90. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.org/bots/api#sending-files)
         */
        thumb?: InputFile|string;
        /**
         * Caption of the video to be sent, 0-200 characters
         */
        caption?: string;
        /**
         * Send [Markdown](https://core.org/bots/api#markdown-style) or [HTML](https://core.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.org/bots/api#formatting-options) in the media caption.
         */
        parse_mode?: string;
        /**
         * Video width
         */
        width?: number;
        /**
         * Video height
         */
        height?: number;
        /**
         * Video duration
         */
        duration?: number;
    }
    export interface InputMediaAudio {
        /**
         * Type of the result, must be video
         */
        type: string;
        /**
         * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. [More info on Sending Files »](https://core.org/bots/api#sending-files)
         */
        media: string;
        /**
         * Thumbnail of the file sent. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 90. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.org/bots/api#sending-files)
         */
        thumb?: InputFile|string;
        /**
         * Caption of the video to be sent, 0-200 characters
         */
        caption?: string;
        /**
         * Send [Markdown](https://core.org/bots/api#markdown-style) or [HTML](https://core.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.org/bots/api#formatting-options) in the media caption.
         */
        parse_mode?: string;
        /**
         * Duration of the audio in seconds
         */
        duration?: number;
        /**
         * Performer of the audio
         */
        performer?: string;
        /**
         * Title of the audio
         */
        title?: string;
    }
    /**
     * Represents a general file to be sent.
     */
    export interface InputMediaDocument {
        /**
         * Type of the result, must be video
         */
        type: string;
        /**
         * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. [More info on Sending Files »](https://core.org/bots/api#sending-files)
         */
        media: string;
        /**
         * Thumbnail of the file sent. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 90. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.org/bots/api#sending-files)
         */
        thumb?: InputFile|string;
        /**
         * Caption of the video to be sent, 0-200 characters
         */
        caption?: string;
        /**
         * Send [Markdown](https://core.org/bots/api#markdown-style) or [HTML](https://core.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.org/bots/api#formatting-options) in the media caption.
         */
        parse_mode?: string;
    }
    /**
     * This object represents a sticker.
     */
    export interface Sticker {
        /**
         * Unique identifier for this file
         */
        file_id: string;
        /**
         * Sticker width
         */
        width: number;
        /**
         * Sticker height
         */
        height: number;
        /**
         * Sticker thumbnail in the .webp or .jpg format
         */
        thumb?: PhotoSize;
        /**
         * Emoji associated with the sticker
         */
        emoji?: string;
        /**
         * Name of the sticker set to which the sticker belongs
         */
        set_name?: string;
        /**
         * For mask stickers, the position where the mask should be placed
         */
        mask_position?: MaskPosition;
        /**
         * File size
         */
        file_size?: number;
    }
    /**
     * This object represents a sticker set.
     */
    export interface StickerSet {
        /**
         * Sticker set name
         */
        name: string;
        /**
         * Sticker set title
         */
        title: string;
        /**
         * True, if the sticker set contains masks
         */
        contains_masks: boolean;
        /**
         * List of all set stickers
         */
        stickers: Sticker[];
    }
    /**
     * This object describes the position on faces where a mask should be placed by default.
     */
    export interface MaskPosition {
        /**
         * The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”.
         */
        point: string;
        /**
         * Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position.
         */
        x_shift: number;
        /**
         * Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.
         */
        y_shift: number;
        /**
         * Mask scaling coefficient. For example, 2.0 means double size.
         */
        scale: number;
    }
    /**
     * InputFile
     * 
     * This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.
     * 
     * Sending files
     * 
     * There are three ways to send files (photos, stickers, audio, media, etc.):
     * 
     * If the file is already stored somewhere on the Telegram servers, you don't need to reupload it: each file object has a file_id field, simply pass this file_id as a parameter instead of uploading. There are no limits for files sent this way.
     * 
     * Provide Telegram with an HTTP URL for the file to be sent. Telegram will download and send the file. 5 MB max size for photos and 20 MB max for other types of content.
     * 
     * Post the file using multipart/form-data in the usual way that files are uploaded via the browser. 10 MB max size for photos, 50 MB for other files.
     * 
     * Sending by file_id
     * 
     * It is not possible to change the file type when resending by file_id. I.e. a video can't be sent as a photo, a photo can't be sent as a document, etc.
     * 
     * It is not possible to resend thumbnails.
     * 
     * Resending a photo by file_id will send all of its sizes.
     * 
     * file_id is unique for each individual bot and can't be transferred from one bot to another.
     * 
     * Sending by URL
     * 
     * When sending by URL the target file must have the correct MIME type (e.g., audio/mpeg for sendAudio, etc.).
     * 
     * In sendDocument, sending by URL will currently only work for gif, pdf and zip files.
     * 
     * To use sendVoice, the file must have the type audio/ogg and be no more than 1MB in size. 1–20MB voice notes will be sent as files.
     * 
     * Other configurations may work but we can't guarantee that they will.
     */
    export type InputFile = Buffer|string
    /**
     * This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
     */
    export interface Game {
        /**
         * Title of the game
         */
        title: string;
        /**
         * Description of the game
         */
        description: string;
        /**
         * Photo that will be displayed in the game message in chats.
         */
        photo: PhotoSize[];
        /**
         * Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls [setGameScore](https://core.org/bots/api#setgamescore), or manually edited using [editMessageText](https://core.org/bots/api#editmessagetext). 0-4096 characters.
         */
        text?: string;
        /**
         * Special entities that appear in text, such as usernames, URLs, bot commands, etc.
         */
        text_entities?: MessageEntity[];
        /**
         * Animation that will be displayed in the game message in chats. Upload via [BotFather](https://t.me/botfather)
         */
        animation?: Animation;
    }
    /**
     * A placeholder, currently holds no information. Use [BotFather](https://t.me/botfather) to set up your game.
     */
    export interface CallbackGame {

    }
    /**
     * This object represents one row of the high scores table for a game.
     */
    export interface GameHighScore {
        /**
         * Position in high score table for the game
         */
        position: number;
        /**
         * User
         */
        user: User;
        /**
         * Score
         */
        score: number;
    }
    /**
     * Contains information about Telegram Passport data shared with the bot by the user.
     */
    export interface PassportData {
        /**
         * Array with information about documents and other Telegram Passport elements that was shared with the bot
         */
        data: EncryptedPassportElement[];
        /**
         * Encrypted credentials required to decrypt the data
         */
        credidentials: EncryptedCredentials;
    }
    /**
     * This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.
     */
    export interface PassportFile {
        /**
         * Unique identifier for this file
         */
        file_id: string;
        /**
         * File size
         */
        file_size: number;
        /**
         * Unix time when the file was uploaded
         */
        file_data: number;
    }
    /**
     * Contains information about documents or other Telegram Passport elements shared with the bot by the user.
     */
    export interface EncryptedPassportElement {
        /**
         * Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”.
         */
        type: string;
        /**
         * Base64-encoded encrypted Telegram Passport element data provided by the user, available for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.org/bots/api#encryptedcredentials).
         */
        data?: string;
        /**
         * User's verified phone number, available only for “phone_number” type
         */
        phone_number?: string;
        /**
         * User's verified email address, available only for “email” type
         */
        email?: string;
        /**
         * Array of encrypted files with documents provided by the user, available for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.org/bots/api#encryptedcredentials).
         */
        files?: PassportFile[];
        /**
         * Encrypted file with the front side of the document, provided by the user. Available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.org/bots/api#encryptedcredentials).
         */
        front_side?: PassportFile;
        /**
         * Encrypted file with the reverse side of the document, provided by the user. Available for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.org/bots/api#encryptedcredentials)
         */
        reverse_side?: PassportFile;
        /**
         * Encrypted file with the selfie of the user holding a document, provided by the user; available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.org/bots/api#encryptedcredentials).
         */
        selfie?: PassportFile;
    }
    /**
     * Contains data required for decrypting and authenticating [EncryptedPassportElement](https://core.org/bots/api#encryptedpassportelement). See the [Telegram Passport Documentation](https://core.org/telegram-passport#receiving-information) for a complete description of the data decryption and authentication processes.
     */
    export interface EncryptedCredentials {
        /**
         * Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for [EncryptedPassportElement](https://core.org/bots/api#encryptedpassportelement) decryption and authentication
         */
        data: string;
        /**
         * Base64-encoded data hash for data authentication
         */
        hash: string;
        /**
         * Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption
         */
        secret: string;
    }
    /**
     * This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:
     */
    type PassportElementError = PassportElementErrorDataField|PassportElementErrorFrontSide|PassportElementErrorReverseSide|PassportElementErrorSelfie|PassportElementErrorFile|PassportElementErrorFiles
    /**
     * Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.
     */
    export interface PassportElementErrorDataField {
        /**
         * Error source, must be data
         */
        source: string;
        /**
         * The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”
         */
        type: string;
        /**
         * Name of the data field which has the error
         */
        field_name: string;
        /**
         * Base64-encoded data hash
         */
        data_hash: string;
        /**
         * Error message
         */
        message: string;
    }
    /**
     * Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
     */
    export interface PassportElementErrorFrontSide {
        /**
         * Error source, must be front_side
         */
        source: string;
        /**
         * The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
         */
        type: string;
        /**
         * Base64-encoded hash of the file with the front side of the document
         */
        file_hash: string;
        /**
         * Error message
         */
        message: string;
    }
    /**
     * Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.
     */
    export interface PassportElementErrorReverseSide {
        /**
         * Error source, must be reverse_side
         */
        source: string;
        /**
         * The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card”
         */
        type: string;
        /**
         * Base64-encoded hash of the file with the reverse side of the document
         */
        file_hash: string;
        /**
         * Error message
         */
        message: string;
    }
    /**
     * Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.
     */
    export interface PassportElementErrorSelfie {
        /**
         * Error source, must be selfie
         */
        source: string;
        /**
         * The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
         */
        type: string;
        /**
         * Base64-encoded hash of the file with the selfie
         */
        file_hash: string;
        /**
         * Error message
         */
        message: string;
    }
    /**
     * Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.
     */
    export interface PassportElementErrorFile {
        /**
         * Error source, must be file
         */
        source: string;
        /**
         * The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
         */
        type: string;
        /**
         * Base64-encoded file hash
         */
        file_hash: string;
        /**
         * Error message
         */
        message: string;
    }
    /**
     * This object represents the content of a media message to be sent.
     */
    export interface PassportElementErrorFiles {
        /**
         * Error source, must be files
         */
        source: string;
        /**
         * The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
         */
        type: string;
        /**
         * List of base64-encoded file hashes
         */
        file_hashes: string[];
        /**
         * Error message
         */
        message: string;
    }
    /**
     * Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
     */
    type InputMedia = InputMediaAnimation|InputMediaDocument|InputMediaAudio|InputMediaPhoto|InputMediaVideo
    /**
     * This object represents a portion of the price for goods or services.
     */
    export interface LabeledPrice {
        /**
         * Portion label
         */
        label: string;
        /**
         * Price of the product in the smallest units of the [currency](https://core.org/bots/payments#supported-currencies) (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the exp parameter in [currencies.json](https://core.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
         */
        amount: number;
    }
    /**
     * This object contains basic information about an invoice.
     */
    export interface Invoice {
        /**
         * Product name
         */
        title: string;
        /**
         * Product description
         */
        description: string;
        /**
         * Unique bot deep-linking parameter that can be used to generate this invoice
         */
        start_parameter: string;
        /**
         * Three-letter ISO 4217 [currency](https://core.org/bots/payments#supported-currencies) code
         */
        currency: string;
        /**
         * Price of the product in the smallest units of the [currency](https://core.org/bots/payments#supported-currencies) (integer, **not** float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the exp parameter in [currencies.json](https://core.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
         */
        total_amount: number;
    }
    /**
     * This object represents a shipping address.
     */
    export interface ShippingAddress {
        /**
         * ISO 3166-1 alpha-2 country code
         */
        country_code: string;
        /**
         * State, if applicable
         */
        state: string;
        /**
         * City
         */
        city: string;
        /**
         * First line for the address
         */
        street_line1: string;
        /**
         * Second line for the address
         */
        street_line2: string;
        /**
         * Address post code
         */
        post_code: string;
    }
    /**
     * This object represents information about an order.
     */
    export interface OrderInfo {
        /**
         * User name
         */
        name?: string;
        /**
         * User's phone number
         */
        phone_number?: string;
        /**
         * User email
         */
        email?: string;
        /**
         * User shipping address
         */
        shipping_address?: ShippingAddress;
    }
    /**
     * This object represents one shipping option.
     */
    export interface ShippingOption {
        /**
         * Shipping option identifier
         */
        id: string;
        /**
         * Option title
         */
        title: string;
        /**
         * List of price portions
         */
        prices: LabeledPrice[];
    }
    /**
     * This object contains basic information about a successful payment.
     */
    export interface SuccessfulPayment {
        /**
         * Three-letter ISO 4217 [currency](https://core.org/bots/payments#supported-currencies) code
         */
        currency: string;
        /**
         * Total price in the smallest units of the currency (integer, not float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the exp parameter in [currencies.json](https://core.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
         */
        total_amount: number;
        /**
         * Bot specified invoice payload
         */
        invoice_payload: string;
        /**
         * Identifier of the shipping option chosen by the user
         */
        shipping_option_id?: string;
        /**
         * Order info provided by the user
         */
        order_info?: OrderInfo;
        /**
         * Telegram payment identifier
         */
        telegram_payment_charge_id: string;
        /**
         * Provider payment identifier
         */
        provider_payment_charge_id: string;
    }
    /**
     * This object contains information about an incoming shipping query.
     */
    export interface ShippingQuery {
        /**
         * Unique query identifier
         */
        id: string;
        /**
         * User who sent the query
         */
        from: User;
        /**
         * Bot specified invoice payload
         */
        invoice_payload: string;
        /**
         * User specified shipping address
         */
        shipping_address: ShippingAddress;
    }
    /**
     * This object contains information about an incoming pre-checkout query.
     */
    export interface PreCheckoutQuery {
        /**
         * Unique query identifier
         */
        id: string;
        /**
         * User who sent the query
         */
        from: User;
        /**
         * Three-letter ISO 4217 [currency](https://core.org/bots/payments#supported-currencies) code
         */
        currency: string;
        /**
         * Total price in the smallest units of the currency (integer, not float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the exp parameter in [currencies.json](https://core.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
         */
        total_amount: number;
        /**
         * Bot specified invoice payload
         */
        invoice_payload: string;
        /**
         * Identifier of the shipping option chosen by the user
         */
        shipping_option_id?: string;
        /**
         * Order info provided by the user
         */
        order_info?: OrderInfo;
    }
    /**
     * This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
     */
    export interface InlineQuery {
        /**
         * Unique identifier for this query
         */
        id: string;
        /**
         * Sender
         */
        from: User;
        /**
         * Sender location, only for bots that request user location
         */
        location?: Location;
        /**
         * Text of the query (up to 512 characters)
         */
        query: string;
        /**
         * Offset of the results to be returned, can be controlled by the bot
         */
        offset: string;
    }
    /**
     * Represents a [result](https://core.org/bots/api#inlinequeryresult) of an inline query that was chosen by the user and sent to their chat partner.
     * 
     * **Note**: It is necessary to enable [inline feedback](https://core.org/bots/inline#collecting-feedback) via [@Botfather](https://t.me/botfather) in order to receive these objects in updates.
     */
    export interface ChosenInlineResult {
        /**
         * The unique identifier for the result that was chosen
         */
        result_id: string;
        /**
         * The user that chose the result
         */
        from: User;
        /**
         * Sender location, only for bots that require user location
         */
        location?: Location;
        /**
         * Identifier of the sent inline message. Available only if there is an [inline keyboard](https://core.org/bots/api#inlinekeyboardmarkup) attached to the message. Will be also received in [callback queries](https://core.org/bots/api#callbackquery) and can be used to [edit](https://core.org/bots/api#updating-messages) the message.
         */
        inline_message_id?: string;
        /**
         * The query that was used to obtain the result
         */
        query: string;
    }
    /**
     * Represents a link to an article or web page.
     */
    export interface InlineQueryResultArticle {
        /**
         * Type of the result, must be article
         */
        type: string;
        /**
         * Unique identifier for this result, 1-64 Bytes
         */
        id: string;
        /**
         * Title of the result
         */
        title: string;
        /**
         * Content of the message to be sent
         */
        input_message_content: InputMessageContent;
        /**
         * [Inline keyboard](https://core.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
         */
        reply_markup?: InlineKeyboardMarkup;
        /**
         * URL of the result
         */
        url?: string;
        /**
         * Pass True, if you don't want the URL to be shown in the message
         */
        hide_url?: boolean;
        /**
         * Short description of the result
         */
        description?: string;
        /**
         * Url of the thumbnail for the result
         */
        thumb_url?: string;
        /**
         * Thumbnail width
         */
        thumb_width?: number;
        /**
         * Thumbnail height
         */
        thumb_height?: number;
    }
    /**
     * Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
     */
    export interface InlineQueryResultPhoto {
        /**
         * Type of the result, must be photo
         */
        type: string;
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid URL of the photo. Photo must be in jpeg format. Photo size must not exceed 5MB
         */
        photo_url: string;
        /**
         * URL of the thumbnail for the photo
         */
        thumb_url: string;
        /**
         * Width of the photo
         */
        photo_width?: number;
        /**
         * Height of the photo
         */
        photo_height?: number;
        /**
         * Title for the result
         */
        title?: string;
        /**
         * Short description of the result
         */
        description?: string;
        /**
         * Caption of the photo to be sent, 0-200 characters
         */
        caption?: string;
        /**
         * Send [Markdown](https://core.org/bots/api#markdown-style) or [HTML](https://core.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.org/bots/api#formatting-options) in your bot's message.
         */
        parse_mode?: string;
        /**
         * [Inline keyboard](https://core.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
         */
        reply_markup?: InlineKeyboardMarkup;
        /**
         * Content of the message to be sent instead of the photo
         */
        input_message_content?: InputMessageContent;
    }
    /**
     * Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
     */
    export interface InlineQueryResultGif {
        /**
         * Type of the result, must be gif
         */
        type: string;
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid URL for the GIF file. File size must not exceed 1MB
         */
        gif_url: string;
        /**
         * Width of the GIF
         */
        gif_width?: number;
        /**
         * Height of the GIF
         */
        gif_height?: number;
        /**
         * Duration of the GIF
         */
        gif_duration?: number;
        /**
         * URL of the static thumbnail for the result (jpeg or gif)
         */
        thumb_url: string;
        /**
         * Title for the result
         */
        title?: string;
        /**
         * Caption of the GIF file to be sent, 0-200 characters
         */
        caption?: string;
        /**
         * Send [Markdown](https://core.org/bots/api#markdown-style) or [HTML](https://core.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.org/bots/api#formatting-options) in your bot's message.
         */
        parse_mode?: string;
        /**
         * [Inline keyboard](https://core.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
         */
        reply_markup?: InlineKeyboardMarkup;
        /**
         * Content of the message to be sent instead of the GIF animation
         */
        input_message_content?: InputMessageContent;
    }
    /**
     * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
     */
    export interface InlineQueryResultMpeg4Gif {
        /**
         * Type of the result, must be mpeg4_gif
         */
        type: string;
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid URL for the MP4 file. File size must not exceed 1MB
         */
        mpeg4_url: string;
        /**
         * Video width
         */
        mpeg4_width?: number;
        /**
         * Video height
         */
        mpeg4_height?: number;
        /**
         * Video duration
         */
        mpeg4_duration?: number;
        /**
         * URL of the static thumbnail (jpeg or gif) for the result
         */
        thumb_url: string;
        /**
         * Title for the result
         */
        title?: string;
        /**
         * Caption of the MPEG-4 file to be sent, 0-200 characters
         */
        caption?: string;
        /**
         * Send [Markdown](https://core.org/bots/api#markdown-style) or [HTML](https://core.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.org/bots/api#formatting-options) in your bot's message.
         */
        parse_mode?: string;
        /**
         * [Inline keyboard](https://core.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
         */
        reply_markup?: InlineKeyboardMarkup;
        /**
         * Content of the message to be sent instead of the video animation
         */
        input_message_content?: InputMessageContent;
    }
    /**
     * Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
     * 
     * >If an InlineQueryResultVideo message contains an embedded video (e.g., YouTube), you must replace its content using input_message_content.
     */
    export interface InlineQueryResultVideo {
        /**
         * Type of the result, must be video
         */
        type: string;
        /**
         * Unique identifier for this result, 1-64 bytes
         */
        id: string;
        /**
         * A valid URL for the embedded video player or video file
         */
        video_url: string;
        /**
         * Mime type of the content of video url, “text/html” or “video/mp4”
         */
        mime_type: string;
        /**
         * URL of the thumbnail (jpeg only) for the video
         */
        thumb_url: string;
        /**
         * Title for the result
         */
        title: string;
        /**
         * Caption of the video to be sent, 0-200 characters
         */
        caption?: string;
        /**
         * Send [Markdown](https://core.org/bots/api#markdown-style) or [HTML](https://core.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.org/bots/api#formatting-options) in your bot's message.
         */
        parse_mode?: string;
        /**
         * Video width
         */
        video_width?: number;
        /**
         * Video height
         */
        video_height?: number;
        /**
         * Video duration in seconds
         */
        video_duration?: number;
        /**
         * Short description of the result
         */
        description?: string;
        /**
         * [Inline keyboard](https://core.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message
         */
        reply_markup?: InlineKeyboardMarkup;
        /**
         * Content of the message to be sent instead of the video. This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video).
         */
        input_message_content?: InputMessageContent;
    }
    /**
     * Represents a link to an mp3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
     * 
     * **Note**: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
     */
    export interface InlineQueryResultAudio {
        type: string;
        id: string;
        audio_url: string;
        title: string;
        caption?: string;
        parse_mode?: string;
        performer?: string;
        audio_duration?: number;
        reply_markup?: InlineKeyboardMarkup;
        input_message_content?: InputMessageContent;
    }
    /**
     * Represents a link to a voice recording in an .ogg container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.
     */
    export interface InlineQueryResultVoice {
        type: string;
        id: string;
        voice_url: string;
        title: string;
        caption?: string;
        parse_mode?: string;
        voice_duration?: number;
        reply_markup?: InlineKeyboardMarkup;
        input_message_content?: InputMessageContent;
    }
    /**
     * Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.
     * 
     * **Note**: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
     */
    export interface InlineQueryResultDocument {
        type: string;
        id: string;
        title: string;
        caption?: string;
        parse_mode?: string;
        document_url: string;
        mime_type: string;
        description?: string;
        reply_markup?: InlineKeyboardMarkup;
        input_message_content?: InputMessageContent;
        thumb_url?: string;
        thumb_width?: number;
        thumb_height?: number;
    }
    /**
     * Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.
     * 
     * **Note**: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
     */
    export interface InlineQueryResultLocation {
        type: string;
        id: string;
        latitude: number;
        longitude: number;
        title: string;
        live_period?: number;
        reply_markup?: InlineKeyboardMarkup;
        input_message_content?: InputMessageContent;
        thumb_url?: string;
        thumb_width?: number;
        thumb_height?: number;
    }
    /**
     * Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.
     * 
     * **Note**: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
     */
    export interface InlineQueryResultVenue {
        type: string;
        id: string;
        latitude?: number;
        longitude?: number;
        title: string;
        address: string;
        foursquare_id?: string;
        foursquare_type?: string;
        reply_markup?: InlineKeyboardMarkup;
        input_message_content?: InputMessageContent;
        thumb_url?: string;
        thumb_width?: number;
        thumb_height?: number;
    }
    /**
     * Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.
     * 
     * **Note**: This will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
     */
    export interface InlineQueryResultContact {
        type: string;
        id: string;
        phone_number: string;
        first_name: string;
        last_name?: string;
        vcard?: string;
        reply_markup?: InlineKeyboardMarkup;
        input_message_content?: InputMessageContent;
        thumb_url?: string;
        thumb_width?: number;
        thumb_height?: number;
    }
    /**
     * Represents a [Game](https://core.org/bots/api#games).
     * 
     * **Note**: This will only work in Telegram versions released after October 1, 2016. Older clients will not display any inline results if a game result is among them.
     */
    export interface InlineQueryResultGame {
        type: string;
        id: string;
        game_short_name: string;
        reply_markup?: InlineKeyboardMarkup;
    }
    /**
     * This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following 4 types:
     */
    type InputMessageContent = InputTextMessageContent|InputLocationMessageContent|InputVenueMessageContent|InputContactMessageContent;
    /**
     * Represents the [content](https://core.org/bots/api#inputmessagecontent) of a text message to be sent as the result of an inline query.
     */
    export interface InputTextMessageContent {
        /**
         * Text of the message to be sent, 1-4096 characters
         */
        message_text: string;
        parse_mode?: string;
        /**
         * Disables link previews for links in the sent message
         */
        disable_web_page_preview?: boolean;
    }
    /**
     * Represents the [content](https://core.org/bots/api#inputmessagecontent) of a location message to be sent as the result of an inline query.
     */
    export interface InputLocationMessageContent {
        latitude: number;
        longitude: number;
        live_period?: number;
    }
    /**
     * Represents the [content](https://core.org/bots/api#inputmessagecontent) of a venue message to be sent as the result of an inline query.
     */
    export interface InputVenueMessageContent {
        latitude: number;
        longitude: number;
        title: string;
        address: string;
        foursquare_id?: string;
        foursquare_type?: string;
    }
    /**
     * Represents the [content](https://core.org/bots/api#inputmessagecontent) of a contact message to be sent as the result of an inline query.
     */
    export interface InputContactMessageContent {
        phone_number: string;
        first_name: string;
        last_name?: string;
        vcard?: string;
    }
    type InlineQueryResult = InlineQueryResultCachedAudio|InlineQueryResultCachedDocument|InlineQueryResultCachedGif|InlineQueryResultCachedMpeg4Gif|InlineQueryResultCachedPhoto|InlineQueryResultCachedSticker|InlineQueryResultCachedVideo|InlineQueryResultCachedVoice|InlineQueryResultArticle|InlineQueryResultAudio|InlineQueryResultContact|InlineQueryResultGame|InlineQueryResultDocument|InlineQueryResultGif|InlineQueryResultMpeg4Gif|InlineQueryResultPhoto|InlineQueryResultVenue|InlineQueryResultVideo|InlineQueryResultVoice;
    export interface InlineQueryResultCachedPhoto {
        type: string;
        id: string;
        photo_file_id: string;
        title?: string;
        description?: string;
        caption?: string;
        parse_mode?: string;
        reply_markup?: InlineKeyboardMarkup;
        input_message_content?: InputMessageContent;
    }
    export interface InlineQueryResultCachedGif {
        type: string;
        id: string;
        gif_file_id: string;
        title?: string;
        caption?: string;
        parse_mode?: string;
        reply_markup?: InlineKeyboardMarkup;
        input_message_content?: InputMessageContent;
    }
    export interface InlineQueryResultCachedMpeg4Gif {
        type: string;
        id: string;
        mpeg4_file_id: string;
        title?: string;
        caption?: string;
        parse_mode?: string;
        reply_markup?: InlineKeyboardMarkup;
        input_message_content?: InputMessageContent;
    }
    export interface InlineQueryResultCachedSticker {
        type: string;
        id: string;
        sticker_file_id: string;
        reply_markup?: InlineKeyboardMarkup;
        input_message_content?: InputMessageContent;
    }
    export interface InlineQueryResultCachedDocument {
        type: string;
        id: string;
        title?: string;
        document_file_id: string;
        description?: string;
        caption?: string;
        parse_mode?: string;
        reply_markup?: InlineKeyboardMarkup;
        input_message_content?: InputMessageContent;
    }
    export interface InlineQueryResultCachedVideo {
        type: string;
        id: string;
        title?: string;
        video_file_id: string;
        description?: string;
        caption?: string;
        parse_mode?: string;
        reply_markup?: InlineKeyboardMarkup;
        input_message_content?: InputMessageContent;
    }
    export interface InlineQueryResultCachedVoice {
        type: string;
        id: string;
        title?: string;
        voice_file_id: string;
        caption?: string;
        parse_mode?: string;
        reply_markup?: InlineKeyboardMarkup;
        input_message_content?: InputMessageContent;
    }
    export interface InlineQueryResultCachedAudio {
        type: string;
        id: string;
        audio_file_id: string;
        caption?: string;
        parse_mode?: string;
        reply_markup?: InlineKeyboardMarkup;
        input_message_content?: InputMessageContent;
    }
    /**
     * Use this method to receive incoming updates using long polling ([wiki](http://en.wikipedia.org/wiki/Push_technology#Long_polling)). An Array of Update objects is returned.
     * 
     * >**Notes**
     * 
     * >**1.** This method will not work if an outgoing webhook is set up.
     * 
     * >**2.** In order to avoid getting duplicate updates, recalculate offset after each server response.
     */
    export interface getUpdates {
        /**
         * Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an _offset_ higher than its _update_id_. The negative offset can be specified to retrieve updates starting from _-offset_ update from the end of the updates queue. All previous updates will forgotten.
         */
        offset?: number;
        /**
         * Limits the number of updates to be retrieved. Values between 1—100 are accepted. Defaults to 100.
         */
        limit?: number;
        /**
         * Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.
         */
        timeout?: number;
        /**
         * List the types of updates you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.
         * 
         * Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.
         */
        allowed_updates?: string[];
    }
    /**
     * Use this method to specify a url and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified url, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.
     * 
     * If you'd like to make sure that the Webhook request comes from Telegram, we recommend using a secret path in the URL, e.g. `https://www.example.com/<token>`. Since nobody else knows your bot‘s token, you can be pretty sure it’s us.
     * 
     * **Notes**
     * 
     * >**1.** You will not be able to receive updates using getUpdates for as long as an outgoing webhook is set up.
     * 
     * >**2.** To use a self-signed certificate, you need to upload your [public key certificate](https://core.org/bots/self-signed) using _certificate_ parameter. Please upload as InputFile, sending a String will not work.
     * 
     * >**3.** Ports currently supported for Webhooks: **443, 80, 88, 8443**.
     * 
     * **NEW!** If you're having any trouble setting up webhooks, please check out this [amazing guide to Webhooks](https://core.org/bots/webhooks).
     */
    export interface setWebhook {
        /**
         * HTTPS url to send updates to. Use an empty string to remove webhook integration
         */
        url: string;
        /**
         * Upload your public key certificate so that the root certificate in use can be checked. See our [self-signed guide](https://core.org/bots/self-signed) for details.
         */
        certificate?: string;
        /**
         * Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot‘s server, and higher values to increase your bot’s throughput.
         */
        max_connections?: number;
        /**
         * List the types of updates you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.
         * 
         * Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.
         */
        allowed_updates?: string[];
    }
    /**
     * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success. Requires no parameters.
     */
    export interface deleteWebhook {

    }
    /**
     * Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.
     */
    export interface getWebhookInfo {

    }
    /**
     * A simple method for testing your bot's auth token. Requires no parameters. Returns basic information about the bot in form of a [User](https://core.org/bots/api#user) object.
     */
    export interface getMe {

    }
    /**
     * Use this method to send text messages. On success, the sent [Message](https://core.org/bots/api#message) is returned.
     * 
     * Formatting options
     * 
     * The Bot API supports basic formatting for messages. You can use bold and italic text, as well as inline links and pre-formatted code in your bots' messages. Telegram clients will render them accordingly. You can use either markdown-style or HTML-style formatting.
     * 
     * Note that Telegram clients will display an **alert** to the user before opening an inline link (‘Open this link?’ together with the full URL).
     * 
     * Links `tg://user?id=<user_id>` can be used to mention a user by their id without using a username. Please note:
     * 
     * >These links will work only if they are used inside an inline link. For example, they will not work, when used in an inline keyboard button.
     * 
     * >These mentions are only guaranteed to work if the user has contacted the bot in the past, has sent a callback query to the bot via inline button or is a member in the group where he was mentioned.
     * 
     * Markdown style
     * 
     * To use this mode, pass Markdown in the parse_mode field when using sendMessage. Use the following syntax in your message:
     * 
     * &#42;bold text&#42;
     * 
     * &#95;italic text&#95;
     * 
     * &#91;inline URL&#93;(http://www.example.com/)
     * 
     * &#91;inline mention of a user&#93;(tg://user?id=123456789)
     * 
     * &#96;inline fixed-width code&#96;
     * 
     * &#96;&#96;&#96;block_language
     * 
     * pre-formatted fixed-width code block
     * 
     * &#96;&#96;&#96;
     * 
     * HTML style
     * 
     * To use this mode, pass HTML in the parse_mode field when using sendMessage. The following tags are currently supported:
     * 
     * <b>bold</b>, <strong>bold</strong>
     * 
     * <i>italic</i>, <em>italic</em>
     * 
     * <a href="http://www.example.com/">inline URL</a>
     * 
     * <a href="tg://user?id=123456789">inline mention of a user</a>
     * 
     * <code>inline fixed-width code</code>
     * 
     * <pre>pre-formatted fixed-width code block</pre>
     * 
     * Please note:
     * 
     * >Only the tags mentioned above are currently supported.
     * 
     * >Tags must not be nested.
     * 
     * >All <, > and & symbols that are not a part of a tag or an HTML entity must be replaced with the corresponding HTML entities (< with &lt;, > with &gt; and & with &amp;).
     * 
     * >All numerical HTML entities are supported.
     * 
     * >The API currently supports only the following named HTML entities: &lt;, &gt;, &amp; and &quot;.
     */
    export interface sendMessage {
        /**
         * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
         */
        chat_id: string|number;
        /**
         * Text of the message to be sent
         */
        text: string;
        /**
         * Send [Markdown](https://core.org/bots/api#markdown-style) or [HTML](https://core.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.org/bots/api#formatting-options) in your bot's message.
         */
        parse_mode?: string;
        /**
         * Disables link previews for links in this message
         */
        disable_web_page_preview?: boolean;
        /**
         * Sends the message [silently](https://org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
         */
        disable_notification?: boolean;
        /**
         * If the message is a reply, ID of the original message
         */
        reply_to_message_id?: number;
        /**
         * Additional export interface options. A JSON-serialized object for an [inline keyboard](https://core.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
         */
        reply_markup?: InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply;
    }
    /**
     * Use this method to forward messages of any kind. On success, the sent Message is returned.
     */
    export interface forwardMessage {
        /**
         * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
         */
        chat_id: number|string;
        /**
         * Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)
         */
        from_chat_id: number|string;
        /**
         * Sends the message [silently](https://org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
         */
        disable_notification?: boolean;
        /**
         * Message identifier in the chat specified in from_chat_id
         */
        message_id: number;
    }
    /**
     * Use this method to send photos. On success, the sent [Message](https://core.org/bots/api#message) is returned.
     */
    export interface sendPhoto {
        /**
         * Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
         */
        chat_id: number|string;
        /**
         * Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. [More info on Sending Files »](https://core.org/bots/api#sending-files)
         */
        photo: InputFile|string;
        /**
         * Photo caption (may also be used when resending photos by file_id), 0-200 characters
         */
        caption?: string;
        /**
         * Send [Markdown](https://core.org/bots/api#markdown-style) or [HTML](https://core.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.org/bots/api#formatting-options) in the media caption.
         */
        parse_mode?: string;
        /**
         * Sends the message [silently](https://org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.
         */
        disable_notification?: boolean;
        /**
         * If the message is a reply, ID of the original message
         */
        reply_to_message_id?: number;
        /**
         * Additional export interface options. A JSON-serialized object for an [inline keyboard](https://core.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user.
         */
        reply_markup?: InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply;
    }
    export interface sendAudio {
        chat_id: string|number;
        audio: InputFile|string;
        caption?: string;
        parse_mode?: string;
        duration?: number;
        performer?: string;
        title?: string;
        thumb?: InputFile|string;
        disable_notification?: boolean;
        reply_to_message_id?: number;
        reply_markup?: InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply;
    }
    export interface sendDocument {
        chat_id: string|number;
        document: InputFile|string;
        thumb?: InputFile|string;
        caption?: string;
        parse_mode?: string;
        disable_notification?: boolean;
        reply_to_message_id?: number;
        reply_markup?: InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply;
    }
    export interface sendVideo {
        chat_id: number|string;
        video: InputFile|string;
        duration?: number;
        width?: number;
        height?: number;
        thumb?: InputFile|string;
        caption?: string;
        parse_mode?: string;
        supports_streaming?: boolean;
        disable_notification?: boolean;
        reply_to_message_id?: number;
        reply_markup?: InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply;
    }
    export interface sendAnimation {
        chat_id: string|number;
        animation: InputFile|string;
        duration?: number;
        width?: number;
        height?: number;
        thumb?: InputFile|string;
        caption?: string;
        parse_mode?: string;
        disable_notification?: boolean;
        reply_to_message_id?: number;
        reply_markup?: InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply;
    }
    export interface sendVoice {
        chat_id: string|number;
        voice: InputFile|string;
        caption?: string;
        parse_mode?: string;
        duration?: number;
        disable_notification?: boolean;
        reply_to_message_id?: number;
        reply_markup?: InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply;
    }
    export interface sendVideoNote {
        chat_id: number|string;
        video_note: InputFile|string;
        duration?: number;
        length?: number;
        thumb?: InputFile|string;
        disable_notification?: boolean;
        reply_to_message_id?: number;
        reply_markup?: InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply;
    }
    export interface sendMediaGroup {
        chat_id: number|string;
        media: (InputMediaPhoto|InputMediaVideo)[];
        disable_notification?: boolean;
        reply_to_message_id?: number;
    }
    export interface sendLocation {
        chat_id: number|string;
        latitude: number;
        longitude: number;
        live_period?: number;
        disable_notification?: boolean;
        reply_to_message_id?: number;
        reply_markup?: InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply;
    }
    export interface editMessageLiveLocation {
        chat_id?: number|string;
        message_id?: number;
        inline_message_id?: string;
        latitude: number;
        longitude: number;
        reply_markup?: InlineKeyboardMarkup;
    }
    export interface stopMessageLiveLocation {
        chat_id?: number|string;
        message_id?: number;
        inline_message_id?: string;
        reply_markup?: InlineKeyboardMarkup;
    }
    export interface sendVenue {
        chat_id: number|string;
        latitude: number;
        longitude: number;
        title: string;
        address: string;
        foursquare_id?: string;
        foursquare_type?: string;
        disable_notification?: boolean;
        reply_to_message_id?: number;
        reply_markup?: InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply;
    }
    export interface sendContact {
        chat_id: number|string;
        phone_number: string;
        first_name: string;
        last_name?: string;
        vcard?: string;
        disable_notification?: boolean;
        reply_to_message_id?: number;
        reply_markup?: InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply;
    }
    export interface sendChatAction {
        chat_id: number|string;
        action: "typing"|"upload_photo"|"record_video"|"upload_video"|"record_audio"|"upload_audio"|"upload_document"|"find_location"|"record_video_note"|"upload_video_note";
    }
    export interface getUserProfilePhotos {
        user_id: number;
        offset?: number;
        limit?: number;
    }
    export interface getFile {
        file_id: string;
    }
    export interface kickChatMember {
        chat_id: number|string;
        user_id: number;
        until_date?: number;
    }
    export interface unbanChatMember {
        chat_id: number|string;
        user_id: number;
    }
    export interface restrictChatMember {
        chat_id: number|string;
        user_id: number;
        until_date?: number;
        can_send_messages?: boolean;
        can_send_media_messages?: boolean;
        can_send_other_messages?: boolean;
        can_add_web_page_previews?: boolean;
    }
    export interface promoteChatMember {
        chat_id: number|string;
        user_id: number;
        can_change_info?: boolean;
        can_post_messages?: boolean;
        can_edit_messages?: boolean;
        can_delete_messages?: boolean;
        can_invite_users?: boolean;
        can_restrict_members?: boolean;
        can_pin_messages?: boolean;
        can_promote_members?: boolean;
    }
    export interface exportChatLink {
        chat_id: number|string;
    }
    export interface setChatPhoto {
        chat_id: number|string;
        photo: InputFile;
    }
    export interface deleteChatPhoto {
        chat_id: number|string;
    }
    export interface setChatTitle {
        chat_id: number|string;
        title: string;
    }
    export interface setChatDescription {
        chat_id: number|string;
        description?: string;
    }
    export interface pinChatMessage {
        chat_id: number|string;
        message_id: number;
        disable_notification?: boolean;
    }
    export interface unpinChatMessage {
        chat_id: number|string;
    }
    export interface leaveChat {
        chat_id: number|string;
    }
    export interface getChat {
        chat_id: number|string;
    }
    export interface getChatAdministrators {
        chat_id: number|string;
    }
    export interface getChatMembersCount {
        chat_id: number|string;
    }
    export interface getChatMember {
        chat_id: number|string;
        user_id: number;
    }
    export interface setChatStickerSet {
        chat_id: number|string;
        sticker_set_name: string;
    }
    export interface deleteChatStickerSet {
        chat_id: number|string;
    }
    export interface answerCallbackQuery {
        callback_query_id: string;
        text?: string;
        show_alert?: boolean;
        url?: string;
        cache_time?: number;
    }
    export interface editMessageText {
        chat_id?: number|string;
        message_id?: number;
        inline_message_id?: string;
        text: string;
        parse_mode?: string;
        disable_web_page_preview?: boolean;
        reply_markup?: InlineKeyboardMarkup;
    }
    export interface editMessageCaption {
        chat_id: number|string;
        message_id?: number;
        inline_message_id?: string;
        caption?: string;
        parse_mode?: string;
        reply_markup?: InlineKeyboardMarkup;
    }
    export interface editMessageMedia {
        chat_id?: number|string;
        message_id?: number;
        inline_message_id?: string;
        media: InputMedia;
        reply_markup?: InlineKeyboardMarkup;
    }
    export interface editMessageReplyMarkup {
        chat_id?: number|string;
        message_ud?: number;
        inline_message_id?: string;
        reply_markup?: InlineKeyboardMarkup;
    }
    export interface deleteMessage {
        chat_id: number|string;
        message_id: number;
    }
    export interface sendSticker {
        chat_id: number|string;
        sticker: InputFile|string;
        disable_notification?: boolean;
        reply_to_message_id?: number;
        reply_markup?: InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply;
    }
    export interface getStickerSet {
        name: string;
    }
    export interface uploadStickerFile {
        user_id: number;
        png_sticker: InputFile;
    }
    export interface createNewStickerSet {
        user_id: number;
        name: string;
        title: string;
        png_sticker: InputFile|string;
        emojis: string;
        contains_masks?: boolean;
        mask_position?: MaskPosition;
    }
    export interface addStickerToSet {
        user_id: number;
        name: string;
        png_sticker: InputFile|string;
        emojis: string;
        mask_position?: MaskPosition;
    }
    export interface setStickerPositionInSet {
        sticker: string;
        position: number;
    }
    export interface deleteStickerFromSet {
        sticker: string;
    }
    export interface answerInlineQuery {
        inline_query_id: string;
        results: InlineQueryResult[];
        cache_time?: number;
        is_personal?: boolean;
        next_offset?: string;
        switch_pm_text?: string;
        switch_pm_parameter?: string;
    }
    export interface sendInvoice {
        chat_id: number;
        title: string;
        description: string;
        payload: string;
        provider_token: string;
        start_parameter: string;
        currency: string;
        prices: LabeledPrice;
        provider_data?: string;
        photo_url?: string;
        photo_size?: number;
        photo_width?: number;
        photo_height?: number;
        need_name?: boolean;
        need_phone_number?: boolean;
        need_email?: boolean;
        need_shipping_address?: boolean;
        send_phone_number_to_provider?: boolean;
        is_flexible?: boolean;
        disable_notification?: boolean;
        readonlyreply_markup?: InlineKeyboardMarkup;
    }
    export interface answerShippingQuery {
        shipping_query_id: string;
        ok: boolean;
        shipping_options?: ShippingOption[];
        error_message?: string;
    }
    export interface answerPreCheckoutQuery {
        pre_checkout_query_id: string;
        ok: boolean;
        error_message?: string;
    }
    export interface setPassportDataErrors {
        user_id: number;
        errors: PassportElementError[];
    }
    export interface sendGame {
        chat_id: number;
        game_short_name: string;
        disable_notification?: boolean;
        reply_to_message_id?: number;
        reply_markup?: InlineKeyboardMarkup;
    }
    export interface setGameScore {
        user_id: number;
        score: number;
        force?: boolean;
        disable_edit_message?: boolean;
        chat_id?: number;
        message_id?: number;
        inline_message_id?: string;
    }
    export interface getGameHighScores {
        user_id: number;
        chat_id?: number;
        message_id?: number;
        inline_message_id?: string;
    }
}