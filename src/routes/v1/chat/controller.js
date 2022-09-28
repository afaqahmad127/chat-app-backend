import {CatchAsync} from "../../../utils/catchAsync.js";
import chatService from "../../../services/v1/chat.service.js";
import httpService from "../../../utils/httpResponse.js";

const getChatMessages = CatchAsync(async (req, res) => {
  const data = await chatService.getChatMessages();
  httpService.SUCCESS(res, data);
});
const sendMessage = CatchAsync(async (req, res) => {
  const data = await chatService.createMessage(req.body);
  httpService.SUCCESS(res, data);
});

export { getChatMessages,sendMessage };
