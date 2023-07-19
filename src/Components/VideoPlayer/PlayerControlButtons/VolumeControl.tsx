import { BsVolumeMuteFill, BsVolumeUpFill, BsVolumeOffFill } from "react-icons/bs";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  PopoverTrigger,
  IconButton,
  Popover,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { useState } from "react";

interface VolumeControlProps {
  handlePlayerVolume: React.Dispatch<React.SetStateAction<number>>;
}

export default function VolumeControl(props: VolumeControlProps) {
  const [muted] = useState(false);
  const [volume, setVolume] = useState(0);

  const handleVolumeSlide = (value: number) => {
    setVolume(value);
    props.handlePlayerVolume(0.01 * value);
  };

  const handleMuted = () => {
    setVolume(0);
    props.handlePlayerVolume(0);
  };
  return (
    <div id="volume-controls" className="controls-sections">
      <span className="clickable">
        <Popover trigger="hover" placement="bottom">
          <PopoverTrigger>
            <div className="speaker-icon">
              <IconButton
                size="s"
                variant="ghost"
                colorScheme="white"
                icon={muted || volume === 0 ? <BsVolumeMuteFill size="20" /> : <BsVolumeOffFill onClick={handleMuted} size="20" />}
                aria-label={"Mute"}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent maxW="60px" color="white" borderColor="black" backgroundColor="black">
            <PopoverBody fontSize={"12px"}>Mute</PopoverBody>
          </PopoverContent>
        </Popover>
      </span>

      <Slider minW="100px" value={volume} colorScheme="green" onChange={handleVolumeSlide}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <span className="clickable">
        <div className="speaker-icon">
          <IconButton size="s" variant="ghost" colorScheme="white" icon={<BsVolumeUpFill size="20" />} aria-label={"Volume Up"} />
        </div>
      </span>
    </div>
  );
}