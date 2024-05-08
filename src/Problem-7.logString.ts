{
  const logString = (data: string | number | undefined): string => {
    if (typeof data === "string") {
      return data;
    } else {
      return "Input is not a string.";
    }
  };

  console.log(logString(42));
}
