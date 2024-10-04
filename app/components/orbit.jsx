"use client";
import Box from "@mui/material/Box";
import {keyframes, styled} from "@mui/system";
import {
  DiscordIcon,
  HubspotIcon,
  LinearIcon,
  LinkedInIcon,
  MicrosoftIcon,
  NotionIcon,
  XIcon,
} from "./icons";

// Keyframes animations
const rotateAnimation = keyframes`
  0% { transform: translateZ(0) rotate(0); }
  50% { transform: translateZ(0) rotate(0.5turn); }
  100% { transform: translateZ(0) rotate(1turn); }
`;

const orbitAnimation = keyframes`
  from { transform: translateX(-50%) translateY(-50%) translateZ(0) rotate(0turn); }
  to { transform: translateX(-50%) translateY(-50%) translateZ(0) rotate(-1turn); }
`;

const itemAnimation = keyframes`
  from { transform: translateZ(0) rotate(0turn); }
  to { transform: translateZ(0) rotate(1turn); }
`;

// Styled components
const OrbitRoot = styled(Box)({
  position: "relative",
  height: 328,
  width: 328,
});

const GradientsContainer = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  opacity: 0.25,
  animation: `${rotateAnimation} 10s linear infinite`,
  willChange: "transform",
});

const ItemsContainer = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)",
  width: 240,
  height: 240,
  animation: `${orbitAnimation} 80s linear infinite`,
  willChange: "transform",
});

const OrbitItem = styled(Box)({
  width: 48,
  height: 48,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(39, 39, 42, 1)",
  border: "1px solid rgba(84, 84, 89, 0.65)",
  backgroundImage:
    "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0) 67%)",
  position: "absolute",
  animation: `${itemAnimation} 80s linear infinite`,
  willChange: "transform",
});

const Orbit = () => {
  const icons = [
    DiscordIcon,
    HubspotIcon,
    LinearIcon,
    LinkedInIcon,
    MicrosoftIcon,
    NotionIcon,
    XIcon,
  ];
  return (
    <OrbitRoot className="orbit-container">
      <GradientsContainer className="gradient-background">
        {Array.from({length: 8}, (_, index) => {
          const size = 104 + 32 * index;
          return (
            <Box
              key={index}
              className="gradient-ring"
              sx={{
                position: "absolute",
                borderRadius: "9999px",
                width: size,
                height: size,
                top: `calc(50% - ${size / 2}px)`,
                left: `calc(50% - ${size / 2}px)`,
                transform: `rotate(-${16 * index}deg)`,
                "&:before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  mask: "linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)",
                  maskComposite: "xor",
                  padding: "1px",
                  pointerEvents: "none",
                  background:
                    "conic-gradient(rgba(109,46,255,0) 6.7%,rgba(158,122,255,.35) 20.8%,rgba(254,139,187,.7) 34.9%,#ffbd7a 49.99%,rgba(255,189,122,0) 50%)",
                },
              }}
            />
          );
        })}
      </GradientsContainer>
      <Box className="orbit-circles">
        {Array.from({length: 8}, (_, index) => {
          const size = 104 + 32 * index;
          return (
            <Box
              key={index}
              className="orbit-circle"
              sx={{
                position: "absolute",
                width: size,
                height: size,
                top: `calc(50% - ${size / 2}px)`,
                left: `calc(50% - ${size / 2}px)`,
                borderRadius: "9999px",
                "&:before": {
                  content: '""',
                  inset: 0,
                  position: "absolute",
                  padding: "1px",
                  background: "rgba(235, 235 ,255, .06)",
                  pointerEvents: "none",
                  mask: "linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)",
                  borderRadius: "inherit",
                  maskComposite: "xor",
                },
              }}
            />
          );
        })}
      </Box>
      <ItemsContainer className="orbit-items">
        {icons.map((Icon, index) => {
          const angle = (index / icons.length) * 2 * Math.PI;
          const left = 120 + 120 * Math.cos(angle) - 24;
          const top = 120 + 120 * Math.sin(angle) - 24;
          return (
            <OrbitItem
              key={index}
              className="orbit-icon"
              sx={{
                left,
                top,
              }}
            >
              <Icon />
            </OrbitItem>
          );
        })}
      </ItemsContainer>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%) translateY(-50%)",
          "& img": {
            width: 64,
            filter: "grayscale(1)",
          },
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="center-logo" src="/logo.png" alt="Logo" />
      </Box>
    </OrbitRoot>
  );
};

export default Orbit;
