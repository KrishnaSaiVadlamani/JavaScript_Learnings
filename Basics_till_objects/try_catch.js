try {
    buildMySite("./website");
  } catch (e) {
    if (e instanceof RangeError) {
      console.error("Seems like a parameter is out of range:", e);
      console.log("Retrying...");
      buildMySite("./website");
    } else {
      // Don't know how to handle other error types; throw them so
      // something else up in the call stack may catch and handle it
      throw e;
    }
  }

  function buildMySite(siteDirectory){
    if (!pathExists(siteDirectory)) {
        throw new Error("Site directory does not exist");
      }
  }