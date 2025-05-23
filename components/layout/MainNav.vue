<template>
  <div>
    <v-navigation-drawer temporary scrim v-model="drawer" color="nav">
      <div class="drawer d-block pa-4">
        <NuxtLinkLocale
          v-for="(link, index) in links"
          :key="index"
          :to="link.path"
          :target="link?.target"
          class="radius-16 s2 mb-2"
        >
          {{ $t(`nav.${link.name}`) }}
        </NuxtLinkLocale>
      </div>
    </v-navigation-drawer>

    <v-app-bar color="transparent" elevation="0" height="100" absolute>
      <v-container>
        <v-card
          color="transparent"
          class="w-100 border-0 d-flex justify-space-between align-center ga-3 px-0"
          min-height="50"
        >
          <SvgIcon
            :transform="false"
            max-width="98"
            :name="logo"
            size="free"
          ></SvgIcon>
          <div class="links d-none d-md-flex">
            <NuxtLinkLocale
              v-for="(link, index) in links"
              :key="index"
              :to="link.path"
              :href="link?.href"
              :target="link?.target"
              class="fs-16"
            >
              {{ $t(`nav.${link.name}`) }}
            </NuxtLinkLocale>
          </div>
          <div class="header_actions flex align-center gap-2">
            <ThemeSwitch />
            <LanguageMenu />
            <v-btn color="white" border rounded class="contact-us_btn">
              {{ $t(`nav.contact_us`) }}
            </v-btn>
            <v-app-bar-nav-icon
              @click="drawer = !drawer"
              class="d-block d-lg-none"
            ></v-app-bar-nav-icon>
          </div>
        </v-card>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script setup>
import LanguageMenu from "../specific/Navbar/LanguageMenu.vue";
import ThemeSwitch from "../specific/Navbar/ThemeSwith.vue";
import { links } from "../../data/links";
import { useTheme } from "vuetify";
const theme = useTheme();

const logo = computed(() =>
  theme.global.name.value == "light" ? "wakeb_logo_light" : "wakeb_logo"
);
</script>

<style lang="scss" scoped>
.header_actions {
  :deep(button) {
    height: 48px;
    background: rgba(var(--v-theme-nav_btn_bg), 3);
    padding: 8px 12px;
    color: rgba(var(--v-theme-nav_btn), 1);
    &:hover {
      background: rgba(var(--v-theme-nav_link), 0.15);
    }
    &.contact-us_btn {
      text-transform: none;
      padding-inline: 32px;
      background: rgb(var(--v-theme-bg_dark));
      border: 1px solid rgba(var(--v-theme-button_border), 1);
      box-shadow: -8px -4px 22.1px 0px #ffffff1a inset,
        0px 8px 32px 0px #ffffff0d !important;
      &:hover {
        background: rgba(var(--v-theme-white), 1);
        color: rgb(var(--v-theme-dark)) !important;
      }
    }
  }
}

.links {
  display: flex;
  gap: 10px;
  border: 1px solid rgb(var(--v-theme-nav_border), 1);
  background: rgba(var(--v-theme-nav_bg), 1);
  padding: 10px;
  border-radius: 26px;
  height: 52px;

  a {
    text-decoration: none;
    color: rgba(var(--v-theme-nav_link), 1);
    transition: all 0.3s ease;
    padding: 6px 16px;
    margin: 0 8px;
    display: flex;
    align-items: center;

    &.router-link-active {
      color: rgba(var(--v-theme-nav_link_active), 1);
    }

    &:hover {
      //color: rgba(var(--v-theme-white), 1);
      background: rgba(var(--v-theme-nav_link), 0.15);
      border-radius: 32px;
    }
  }

  &.drawer {
    a {
      height: 40px;
    }
  }
}
</style>
