import { Box } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const image = {
    src: "",
    alt: "",
  };

  if (rating === 3) {
    image.src = "😶";
  }
  if (rating === 4) {
    image.src = "👍";
  }
  if (rating === 5) {
    image.src = "🎯";
  }

  return <Box marginTop={1}>{image.src}</Box>;
};

export default Emoji;
