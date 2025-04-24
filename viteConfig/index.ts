import loadPlugins from './plugins';
import loadViteResolve from './resolve';
import loadViteServer from './server';
import loadViteBuild from './build';
import loadViteCss from './css';

const loadInitLog = () => {
  const colors = {
    reset: '\x1b[0m',
    fg: '\x1b[35m',
    bg: '\x1b[43m'
  };
  const LINK = 'https://github.com/star-devil/learning-Docs';
  console.log(
    `${colors.fg} 😊我的学习记录在这里==>:🔗${colors.bg}${LINK}${colors.reset}，欢迎star。`
  );
};
export default {
  loadPlugins,
  loadViteResolve,
  loadViteServer,
  loadViteBuild,
  loadViteCss,
  loadInitLog
};
