// actions.js

export const setVideoSectionState = (isInVideoSection) => ({
  type: "SET_VIDEO_SECTION_STATE",
  payload: isInVideoSection,
});

export const setHeroSectionState = (isInHeroSection) => ({
  type: "SET_HERO_SECTION_STATE",
  payload: isInHeroSection,
});