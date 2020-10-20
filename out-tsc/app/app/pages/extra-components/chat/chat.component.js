import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ChatService } from './chat.service';
let ChatComponent = class ChatComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.messages = this.chatService.loadMessages();
    }
    sendMessage(event) {
        const files = !event.files ? [] : event.files.map((file) => {
            return {
                url: file.src,
                type: file.type,
                icon: 'nb-compose',
            };
        });
        this.messages.push({
            text: event.message,
            date: new Date(),
            reply: true,
            type: files.length ? 'file' : 'text',
            files: files,
            user: {
                name: 'Jonh Doe',
                avatar: 'https://i.gifer.com/no.gif',
            },
        });
        const botReply = this.chatService.reply(event.message);
        if (botReply) {
            setTimeout(() => { this.messages.push(botReply); }, 500);
        }
    }
};
ChatComponent = __decorate([
    Component({
        selector: 'ngx-chat',
        templateUrl: 'chat.component.html',
        styleUrls: ['chat.component.scss'],
        providers: [ChatService],
    }),
    __metadata("design:paramtypes", [ChatService])
], ChatComponent);
export { ChatComponent };
//# sourceMappingURL=chat.component.js.map