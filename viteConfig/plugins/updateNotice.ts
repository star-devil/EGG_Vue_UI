/**
 * @description: 自动更新通知
 */
import { webUpdateNotice } from '@plugin-web-update-notification/vite';

export default function setupUpdateNotice() {
  return webUpdateNotice({
    logVersion: true,
    notificationProps: {
      title: '更新提醒',
      description: '网站已更新，请刷新页面获取最新内容',
      buttonText: '刷新',
      dismissButtonText: '忽略'
    }
  });
}
