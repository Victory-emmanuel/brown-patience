import { FacebookSharp, Instagram, X, WhatsApp } from "@mui/icons-material";

import { SocialsLink, SocialsMain } from "../styles/index.styled";

const Socials = () => {
  return (
    <>
      <SocialsMain id="socials">
        <SocialsLink>
          <WhatsApp sx={{ sm: { fontSize: "0.85rem" } }} />
        </SocialsLink>
        <SocialsLink>
          <X sx={{ sm: { fontSize: "0.85rem" } }} />
        </SocialsLink>
        <SocialsLink>
          <Instagram sx={{ sm: { fontSize: "0.85rem" } }} />
        </SocialsLink>
        <SocialsLink>
          <FacebookSharp sx={{ sm: { fontSize: "0.85rem" } }} />
        </SocialsLink>
      </SocialsMain>
    </>
  );
};

export default Socials;
