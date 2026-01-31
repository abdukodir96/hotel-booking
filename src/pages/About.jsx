import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import heroBg from "../assets/background.jpg";

// MUI
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  Chip,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

// Icons (xohlasangiz o'zgartirasiz)
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

const stats = [
  { label: "Hotels Worldwide", value: "500+" },
  { label: "Happy Guests", value: "10,000+" },
  { label: "Countries Covered", value: "30+" },
  { label: "Customer Satisfaction", value: "98%" },
];

const values = [
  {
    title: "Trust & Transparency",
    desc: "We believe in honest pricing, verified listings, and real guest reviews.",
    icon: <ShieldOutlinedIcon />,
  },
  {
    title: "Quality First",
    desc: "Every hotel on QuickStay is carefully curated to meet high standards.",
    icon: <AutoAwesomeOutlinedIcon />,
  },
  {
    title: "Customer-Centered",
    desc: "Your comfort and experience guide every decision we make.",
    icon: <HandshakeOutlinedIcon />,
  },
  {
    title: "Innovation",
    desc: "We continuously improve our platform to make booking effortless.",
    icon: <BoltOutlinedIcon />,
  },
];

const bullets = [
  {
    title: "Curated stays",
    desc: "Handpicked hotels, villas, and unique stays — quality checked.",
    icon: <HotelOutlinedIcon />,
  },
  {
    title: "Verified reviews",
    desc: "Real feedback from real guests — no noise, just trust.",
    icon: <StarOutlineOutlinedIcon />,
  },
  {
    title: "Secure checkout",
    desc: "Transparent pricing and safe payments from start to finish.",
    icon: <CreditCardOutlinedIcon />,
  },
  {
    title: "Global reach",
    desc: "Explore destinations worldwide — all in one place.",
    icon: <PublicOutlinedIcon />,
  },
];

const About = () => {
  // ✅ page ochilganda tepaga
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Box sx={{ bgcolor: "#f8fafc", pt: { xs: 12, md: 14 }, pb: 10 }}>
      <Container maxWidth="lg">
        {/* HERO */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 4,
            border: "1px solid",
            borderColor: "grey.200",
            boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* overlay (rasm ko‘rinsin: 55~65 tavsiya) */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(255,255,255,0.60)", // 20-25% ko‘proq ko‘rinadi
              backdropFilter: "blur(6px)",
            }}
          />

          {/* content */}
          <Box sx={{ position: "relative", p: { xs: 3, md: 6 } }}>
            <Stack spacing={2} sx={{ maxWidth: 760 }}>
              <Chip
                label="Premium stays • Trusted booking • Global destinations"
                variant="outlined"
                size="small"
                sx={{
                  width: "fit-content",
                  bgcolor: "rgba(255,255,255,0.75)",
                  borderColor: "rgba(0,0,0,0.12)",
                  fontWeight: 600,
                }}
              />

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  letterSpacing: -0.5,
                  color: "grey.900",
                }}
              >
                About QuickStay
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "grey.700", lineHeight: 1.6 }}
              >
                Making travel simple, trusted, and unforgettable — with curated
                stays, transparent pricing, and a seamless booking experience.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mt: 1 }}
              >
                <Button
                  component={RouterLink}
                  to="/rooms"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "grey.900",
                    "&:hover": { bgcolor: "grey.800" },
                    borderRadius: 999,
                    px: 3,
                    py: 1.2,
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  Explore Hotels
                </Button>

                <Button
                  href="#story"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: 999,
                    px: 3,
                    py: 1.2,
                    textTransform: "none",
                    fontWeight: 700,
                    borderColor: "rgba(0,0,0,0.18)",
                    color: "grey.900",
                    bgcolor: "rgba(255,255,255,0.65)",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.85)" },
                  }}
                >
                  Learn our story
                </Button>
              </Stack>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {["No hidden fees", "Verified listings", "Secure payments"].map(
                  (t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        bgcolor: "rgba(255,255,255,0.75)",
                        border: "1px solid rgba(0,0,0,0.10)",
                        fontWeight: 600,
                        color: "grey.800",
                      }}
                    />
                  ),
                )}
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* STORY + WHAT WE DO */}
        <Grid container spacing={3} sx={{ mt: 3 }} id="story">
          <Grid item xs={12} lg={6}>
            <Card
              variant="outlined"
              sx={{ borderRadius: 4, boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "grey.500",
                    fontWeight: 700,
                    letterSpacing: 1.4,
                  }}
                >
                  OUR STORY
                </Typography>

                <Typography
                  variant="h5"
                  sx={{ mt: 1, fontWeight: 800, color: "grey.900" }}
                >
                  Built for travelers who value clarity and comfort
                </Typography>

                <Typography sx={{ mt: 2, color: "grey.700", lineHeight: 1.8 }}>
                  QuickStay started with a simple mission: remove the complexity
                  from hotel booking. Travelers were tired of hidden fees,
                  unreliable listings, and overwhelming options.
                </Typography>

                <Typography
                  sx={{ mt: 1.5, color: "grey.700", lineHeight: 1.8 }}
                >
                  We bring together carefully selected stays, transparent
                  pricing, and an experience designed around what matters —
                  enjoying your journey.
                </Typography>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                  {stats.slice(0, 2).map((s) => (
                    <Grid key={s.label} item xs={6}>
                      <Box
                        sx={{
                          borderRadius: 3,
                          border: "1px solid",
                          borderColor: "grey.200",
                          bgcolor: "#f8fafc",
                          p: 2,
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 800, color: "grey.900" }}
                        >
                          {s.value}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "grey.600" }}
                        >
                          {s.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Card
              variant="outlined"
              sx={{ borderRadius: 4, boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "grey.500",
                    fontWeight: 700,
                    letterSpacing: 1.4,
                  }}
                >
                  WHAT WE DO
                </Typography>

                <Typography
                  variant="h5"
                  sx={{ mt: 1, fontWeight: 800, color: "grey.900" }}
                >
                  A premium booking experience, end-to-end
                </Typography>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                  {bullets.map((b) => (
                    <Grid key={b.title} item xs={12} sm={6}>
                      <Box
                        sx={{
                          borderRadius: 3,
                          border: "1px solid",
                          borderColor: "grey.200",
                          bgcolor: "white",
                          p: 2,
                          display: "flex",
                          gap: 1.5,
                          alignItems: "flex-start",
                          transition: "0.2s ease",
                          "&:hover": {
                            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 2,
                            bgcolor: "#f8fafc",
                            border: "1px solid rgba(0,0,0,0.10)",
                            display: "grid",
                            placeItems: "center",
                            color: "grey.900",
                          }}
                        >
                          {b.icon}
                        </Box>

                        <Box>
                          <Typography
                            sx={{ fontWeight: 800, color: "grey.900" }}
                          >
                            {b.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ mt: 0.5, color: "grey.700", lineHeight: 1.6 }}
                          >
                            {b.desc}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Box
                  sx={{
                    mt: 2.5,
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "grey.200",
                    bgcolor: "#f8fafc",
                    p: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "grey.800", lineHeight: 1.7 }}
                  >
                    We focus on quality, transparency, and speed — so you can
                    book with confidence, every time.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* VALUES */}
        <Box sx={{ mt: 6 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ sm: "flex-end" }}
            spacing={1}
          >
            <Box>
              <Typography
                variant="overline"
                sx={{ color: "grey.500", fontWeight: 700, letterSpacing: 1.4 }}
              >
                WHY QUICKSTAY
              </Typography>
              <Typography
                variant="h4"
                sx={{ mt: 0.5, fontWeight: 900, color: "grey.900" }}
              >
                Principles that guide our platform
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  color: "grey.700",
                  maxWidth: 780,
                  lineHeight: 1.7,
                }}
              >
                Every feature we build is driven by trust, quality, and a
                user-first experience.
              </Typography>
            </Box>

            <Button
              component={RouterLink}
              to="/rooms"
              variant="text"
              sx={{ textTransform: "none", fontWeight: 800, color: "grey.900" }}
            >
              Browse stays →
            </Button>
          </Stack>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            {values.map((v) => (
              <Grid key={v.title} item xs={12} sm={6} md={3}>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 4,
                    height: "100%",
                    transition: "0.2s ease",
                    "&:hover": {
                      boxShadow: "0 14px 40px rgba(0,0,0,0.10)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 3,
                        bgcolor: "#f8fafc",
                        border: "1px solid rgba(0,0,0,0.10)",
                        display: "grid",
                        placeItems: "center",
                        color: "grey.900",
                      }}
                    >
                      {v.icon}
                    </Box>

                    <Typography
                      sx={{ mt: 2, fontWeight: 900, color: "grey.900" }}
                    >
                      {v.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mt: 1, color: "grey.700", lineHeight: 1.7 }}
                    >
                      {v.desc}
                    </Typography>

                    <Box
                      sx={{ mt: 2, height: 2, width: 40, bgcolor: "grey.300" }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* STATS */}
        <Box sx={{ mt: 6 }}>
          <Card
            variant="outlined"
            sx={{ borderRadius: 4, boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                variant="overline"
                sx={{ color: "grey.500", fontWeight: 700, letterSpacing: 1.4 }}
              >
                IMPACT
              </Typography>
              <Typography
                variant="h4"
                sx={{ mt: 0.5, fontWeight: 900, color: "grey.900" }}
              >
                Trusted by travelers worldwide
              </Typography>
              <Typography sx={{ mt: 1, color: "grey.700" }}>
                Measurable results that reflect real customer value.
              </Typography>

              <Grid container spacing={2} sx={{ mt: 2 }}>
                {stats.map((s) => (
                  <Grid key={s.label} item xs={6} md={3}>
                    <Box
                      sx={{
                        borderRadius: 3,
                        border: "1px solid",
                        borderColor: "grey.200",
                        bgcolor: "#f8fafc",
                        p: 2,
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: 900, color: "grey.900" }}
                      >
                        {s.value}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "grey.600" }}>
                        {s.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>

        {/* CTA */}
        <Box sx={{ mt: 6 }}>
          <Box
            sx={{
              borderRadius: 4,
              border: "1px solid",
              borderColor: "grey.200",
              bgcolor: "grey.900",
              color: "white",
              p: { xs: 3, md: 5 },
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.12), transparent 45%), radial-gradient(circle at 10% 90%, rgba(255,255,255,0.10), transparent 45%)",
              }}
            />

            <Box sx={{ position: "relative", maxWidth: 820 }}>
              <Typography variant="h4" sx={{ fontWeight: 900 }}>
                Ready to find your perfect stay?
              </Typography>
              <Typography
                sx={{ mt: 1, color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}
              >
                Explore curated hotels, compare with confidence, and book in
                minutes — with transparent pricing and trusted reviews.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mt: 3 }}
              >
                <Button
                  component={RouterLink}
                  to="/rooms"
                  variant="contained"
                  sx={{
                    bgcolor: "white",
                    color: "grey.900",
                    "&:hover": { bgcolor: "grey.100" },
                    borderRadius: 999,
                    textTransform: "none",
                    fontWeight: 900,
                    px: 3,
                    py: 1.2,
                  }}
                >
                  Explore Hotels
                </Button>

                <Button
                  component={RouterLink}
                  to="/rooms"
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.35)",
                    color: "white",
                    "&:hover": {
                      borderColor: "rgba(255,255,255,0.6)",
                      bgcolor: "rgba(255,255,255,0.08)",
                    },
                    borderRadius: 999,
                    textTransform: "none",
                    fontWeight: 800,
                    px: 3,
                    py: 1.2,
                  }}
                >
                  View deals
                </Button>
              </Stack>

              <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.15)" }} />

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {["Secure checkout", "Verified reviews", "Curated stays"].map(
                  (t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        bgcolor: "rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.88)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        fontWeight: 700,
                      }}
                    />
                  ),
                )}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
