/** @format */

export function errorHandling(textError) {
  switch (textError.replaceAll(/\s/g, "")) {
    case "phoneisarequiredfield": {
      return "وارد کردن شماره همراه الزامی است.";
    }
    case "passwordmustbeatleast4characters": {
      return "فیلد رمز عبور حداقل باید 4 کاراکتر باشد.";
    }
    case "passwordmustbeatmost20characters": {
        return "فیلد رمز عبور حداکثر باید 20 کاراکتر باشد.";
      }

      case "passwordisarequiredfield": {
        return "پر کردن فیلد رمز عبور الزامی است.";
      }

      
    
    default: {
      return textError;
    }
  }
}
