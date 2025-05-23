<template>
  <VFooter>
    <VContainer class="footer-container">
      <v-row>
        <v-col cols="3" class="footer-wrapper">
          <div class="footer-item">
            <div class="company_logo">
              <SvgIcon :transform="false" :name="logo" size="free"></SvgIcon>
            </div>
            <p>
              Artificial Intelligence At One Stop : Wakeb offers a package of
              artificial intelligence solutions, drones, and various advanced
              technologies and customized solutions that cater to a wide range
              of requirements and domains.
            </p>
            <div class="social-media-icons">
              <a :class="theme.global.name.value" href="#">
                <SvgIcon :transform="false" name="facebook" size="xs"></SvgIcon>
              </a>
              <a :class="theme.global.name.value" href="#">
                <SvgIcon :transform="false" name="x" size="xs"></SvgIcon>
              </a>
              <a :class="theme.global.name.value" href="#">
                <SvgIcon :transform="false" name="snapchat" size="xs"></SvgIcon>
              </a>
              <a :class="theme.global.name.value" href="#">
                <SvgIcon :transform="false" name="linkedin" size="xs"></SvgIcon>
              </a>
              <a :class="theme.global.name.value" href="#">
                <SvgIcon :transform="false" name="youtube" size="xs"></SvgIcon>
              </a>
            </div>
            <div class="badges-wrapper">
              <SvgIcon
                :transform="false"
                name="certified"
                size="free"
              ></SvgIcon>
              <SvgIcon :transform="false" name="sar3" size="free"></SvgIcon>
            </div>
          </div>
        </v-col>
        <v-col cols="3" class="footer-wrapper">
          <div class="footer-item">
            <h4>{{ $t("footer.company") }}</h4>
            <ul>
              <li>
                <NuxtLinkLocale to="/">
                  {{ $t(`footer.home`) }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="/careers">
                  {{ $t(`footer.careers`) }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="/services-and-solutions">
                  {{ $t(`footer.services`) }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="/about-us">
                  {{ $t(`footer.aboutUs`) }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="/blogs">
                  {{ $t(`footer.blog`) }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="/contact-us">
                  {{ $t(`footer.contactUs`) }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="/">
                  {{ $t(`footer.becomePartner`) }}
                </NuxtLinkLocale>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="3" class="footer-wrapper">
          <div class="footer-item">
            <h4>{{ $t("footer.solutions") }}</h4>
            <ul>
              <li>
                <NuxtLinkLocale to="/">
                  {{ $t(`footer.artificial_intelligence`) }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="/careers">
                  {{ $t(`footer.specialized_services`) }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="/services-and-solutions">
                  {{ $t(`footer.digital_environment`) }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="/about-us">
                  {{ $t(`footer.cloud_hosting`) }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="/blogs">
                  {{ $t(`footer.web_solutions`) }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="/contact-us">
                  {{ $t(`footer.uavs`) }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="/">
                  {{ $t(`footer.data`) }}
                </NuxtLinkLocale>
              </li>
              <li>
                <NuxtLinkLocale to="/">
                  {{ $t(`footer.others`) }}
                </NuxtLinkLocale>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="3" class="footer-wrapper">
          <div class="footer-item">
            <h4>{{ $t("footer.contact") }}</h4>
            <div class="footer-item">
              <div class="item-section">
                <h5>
                  <SvgIcon name="map-mark" size="xs" />
                  <span>{{ $t("footer.address") }}</span>
                </h5>
                <p class="contact">{{ $t("footer.contact_description") }}</p>
              </div>
              <div class="item-section">
                <h5>
                  <SvgIcon name="phone" size="xs" />
                  <span>{{ $t("footer.phone") }}</span>
                </h5>
                <p class="contact">099 452 326 584</p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </VContainer>
  </VFooter>
</template>

<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();

const logo = computed(() =>
  theme.global.name.value == "light" ? "wakeb_logo_light" : "wakeb_logo"
);
</script>

<style lang="scss" scoped>
.v-footer {
  background: rgb(var(--v-theme-background));
}

.footer-container {
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 20px;
  padding: 80px;

  .footer-wrapper {
    .item-section {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    &:first-child {
      flex: 0 0 30%;
    }

    .footer-item {
      display: flex;
      gap: 24px;
      flex-direction: column;
      color: rgb(var(--v-theme-text));

      .company_logo {
        svg {
          height: 25px;
        }
      }

      .social-media-icons {
        display: flex;
        align-items: center;
        gap: 16px;

        a {
          border-radius: 8px;
          transition: color 0.3s ease-in-out;
          padding: 8px;

          &.dark {
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.03) 0%,
              rgba(255, 255, 255, 0) 100%
            );
          }
          &.light {
            background-color: #f1f1f1;
          }
        }
      }

      .badges-wrapper {
        display: flex;
        align-items: center;
        gap: 16px;

        svg {
          height: 50px;
        }
      }

      p:not(.contact) {
        color: rgba(var(--v-theme-text), 0.3);
      }
      p {
        font-size: clamp(0.625rem, 5vw, 0.875rem);
      }

      h5 {
        display: flex;
        gap: 6px;
        font-size: clamp(0.725rem, 5vw, 0.875rem);
        color: rgba(var(--v-theme-text), 1);
      }

      h4 {
        font-size: clamp(0.875rem, 5vw, 1rem);
        font-weight: bold;
      }

      ul {
        li {
          padding: 0 0.5rem;
          min-height: 32px;
          display: flex;
          align-items: center;

          a {
            color: rgb(var(--v-theme-text), 1);
            transition: color 0.3s ease-in-out;

            &:hover,
            &.router-link-exact-active {
              color: rgb(var(--v-theme-text), 1);
            }
          }
        }
      }

      &:last-child {
        gap: 32px;
      }
    }
  }
}

svg {
  color: rgba(var(--v-theme-text));
}
</style>
