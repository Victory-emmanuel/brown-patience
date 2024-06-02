import {
  FacebookSharp,
  Instagram,
  Language,
  WhatsApp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { SocialsLink, SocialsMain } from "../styles/index.styled";

const Socials = () => {
  return (
    <>
      <SocialsMain id="socials">
        <SocialsLink>
          <WhatsApp sx={{sm:{fontSize:"1rem"}}}/>
        </SocialsLink>
        <SocialsLink>
          <Language sx={{sm:{fontSize:"1rem"}}}/>
        </SocialsLink>
        <SocialsLink>
          <Instagram sx={{sm:{fontSize:"1rem"}}}/>
        </SocialsLink>
        <SocialsLink>
          <FacebookSharp sx={{sm:{fontSize:"1rem"}}}/>
        </SocialsLink>
      </SocialsMain>
    </>
  );
};

export default Socials;
