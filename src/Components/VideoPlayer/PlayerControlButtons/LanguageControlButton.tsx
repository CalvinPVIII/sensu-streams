import { Popover, PopoverContent, PopoverBody, PopoverTrigger } from "@chakra-ui/react";
import { useState } from "react";

import usFlag from "../../../assets/images/usa.svg";
import jpFlag from "../../../assets/images/jp.svg";

interface LanguageControlButtonProps {
  currentPlayerLanguage: "english" | "japanese";
  handlePlayerCurrentLanguage: (language: "english" | "japanese") => void;
  currentSource: string;
  availableLanguages: Array<string>;
}

export default function LanguageControlButton(props: LanguageControlButtonProps) {
  const [language, setLanguage] = useState<"english" | "japanese">(props.currentPlayerLanguage);

  const handleChangeLanguage = () => {
    if (language === "english") {
      setLanguage("japanese");
      props.handlePlayerCurrentLanguage("japanese");
    } else if (language === "japanese") {
      setLanguage("english");
      props.handlePlayerCurrentLanguage("english");
    }
  };

  return (
    <div id="language-control-buttons" className="clickable">
      {props.availableLanguages.includes("english") ? (
        <Popover trigger="hover" placement="bottom">
          <PopoverTrigger>
            {language === "japanese" ? (
              <span style={{ opacity: "0.5" }} onClick={handleChangeLanguage}>
                <img className="control-icon flag-icon" src={usFlag} />
              </span>
            ) : (
              <span>
                <img className="control-icon flag-icon" src={usFlag} />
              </span>
            )}
          </PopoverTrigger>

          <PopoverContent maxW="90px" color="white" borderColor="black" backgroundColor="black">
            <PopoverBody fontSize={"10px"}>Set language to English</PopoverBody>
          </PopoverContent>
        </Popover>
      ) : (
        <></>
      )}
      {props.availableLanguages.length > 1 ? (
        <span id="language-separator" className="control-icon">
          /
        </span>
      ) : (
        <></>
      )}

      {props.availableLanguages.includes("japanese") ? (
        <Popover trigger="hover" placement="bottom">
          <PopoverTrigger>
            {language === "english" ? (
              <span style={{ opacity: "0.5" }} onClick={handleChangeLanguage}>
                <img className="control-icon flag-icon" src={jpFlag} />
              </span>
            ) : (
              <span>
                <img className="control-icon flag-icon" src={jpFlag} />
              </span>
            )}
          </PopoverTrigger>
          <PopoverContent maxW="90px" color="white" borderColor="black" backgroundColor="black">
            <PopoverBody fontSize={"10px"}>Set language to Japanese</PopoverBody>
          </PopoverContent>
        </Popover>
      ) : (
        <></>
      )}
    </div>
  );
}
