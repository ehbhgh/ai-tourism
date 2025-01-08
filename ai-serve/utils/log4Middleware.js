import log4js from "log4js";

// 将自定义的日志级别与 log4js 模块中的相应级别进行映射
const levels = {
  trace: log4js.levels.TRACE,
  debug: log4js.levels.DEBUG,
  info: log4js.levels.INFO,
  warn: log4js.levels.WARN,
  error: log4js.levels.ERROR,
  fatal: log4js.levels.FATAL,
};
const customLayout = {
  type: "pattern",
  pattern: "%d{yyyy-MM-dd hh:mm:ss} [%p] %c - %m",
};
// 对 log4js 进行配置
log4js.configure({
  appenders: {
    console: { type: "console" },
    info: {
      type: "dateFile", // 按日期文件输出
      filename: "logs/info", // 日志文件前缀
      pattern: "yyyy-MM-dd.log", // 日志文件后缀
      alwaysIncludePattern: true, // 始终包含日期
      keepFileExt: true, // 保留文件扩展名
      daysToKeep: 30, // 保留最近 30 天的日志文件
      layout: customLayout,
    },
    error: {
      type: "dateFile",
      filename: "logs/error",
      pattern: "yyyy-MM-dd.log",
      alwaysIncludePattern: true,
      keepFileExt: true,
      daysToKeep: 30, // 保留最近 30 天的日志文件
      layout: customLayout,
    },
  },
  categories: {
    default: { appenders: ["console"], level: "debug" },
    info: { appenders: ["info", "console"], level: "info" },
    error: { appenders: ["error", "console"], level: "error" },
  },
});

class Logger {
  constructor() {
    this.loggers = {
      trace: log4js.getLogger("trace"),
      debug: log4js.getLogger("debug"),
      info: log4js.getLogger("info"),
      warn: log4js.getLogger("warn"),
      error: log4js.getLogger("error"),
      fatal: log4js.getLogger("fatal"),
    };

    // 设置每个 logger 的默认级别
    Object.keys(this.loggers).forEach((level) => {
      this.loggers[level].level = levels[level];
    });
  }

  trace(content) {
    this.loggers.trace.trace(content);
  }

  debug(content) {
    this.loggers.debug.debug(content);
  }

  info(content) {
    this.loggers.info.info(content);
  }

  warn(content) {
    this.loggers.warn.warn(content);
  }

  error(content) {
    this.loggers.error.error(content);
  }

  fatal(content) {
    this.loggers.fatal.fatal(content);
  }
}

// 创建一个 Logger 实例
const logger = new Logger();

// 导出 logger 对象
export default logger;
