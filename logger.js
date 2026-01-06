/**
 * @param {string} level - The log level. Examples: 'INFO', 'ERROR', 'DEBUG', 'WARN'.
 * @param {string} module - The module or component where the log originated. Examples: 'USER_CONTROLLER', 'AUTH_SERVICE', 'USER_MODEL'.
 * @param {string} action - A specific action or method being logged. Examples: 'registerUser', 'loginUser', 'fetchProductDetails'.
 * @param {string} message - A descriptive message for the log. Examples: 'Operation started', 'Data received successfully', 'Validation failed', 'User authenticated'.
 * @param {object} [data=null] - An optional object containing additional relevant data for the log. Example: `{ userId: 123, requestBody: {...}, errorDetails: '...' }`.
 * @returns {void} - This function does not return any value.
 *
 */
function log(level, module, action, message, data = null) {
  const now = new Date();
  const timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(now.getDate()).padStart(2, "0")} - ${String(
    now.getHours()
  ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(
    now.getSeconds()
  ).padStart(2, "0")}`;
  const logData = data ? ` - Data: ${JSON.stringify(data)}` : "";
  console.log(
    `[${timestamp}] [${level}] [${module}] ${action} - ${message}${logData}`
  );
}

export default log;
