<template>
	<div class="content">
		<service class="service"></service>
		<div class="center-group">
			<weather class="weather"></weather>
			<div class="center-group-footer">
				<div class="footer-left">
					<older class="older" @click.native="olders"></older>
					<volunteer class="volunteer" @click.native="volunteers"></volunteer>
					<activity class="activity" @click.native="activities"></activity>
				</div>
				<policy class="policy"  @click.native="policies"></policy>
			</div>
		</div>
		<div class="right-group">
			<persional class="persional" @click.native="landed"></persional>
			<message class="message"></message>
			<about class="about" @click.native="aboutus"></about>
		</div>
	</div>
</template>

<script>
import service from "./units/service";
import weather from "./units/weather";
import older from "./units/older";
import volunteer from "./units/volunteer";
import activity from "./units/activity";
import policy from "./units/policy";
import persional from "./units/persional";
import message from "./units/message";
import about from "./units/about";
import router from "../router";
export default {
  name: "layout",
  data() {
    return {};
  },
  components: {
    service,
    weather,
    older,
    volunteer,
    activity,
    persional,
    policy,
    message,
    about
  },
  methods: {
    landed: () => {
      router.push({ path: "/persionalgo" });
    },
    aboutus: () => {
      router.push({ path: "/aboutus" });
    },
    policies: () => {
      router.push({ path: "/policies" });
    },
    activities: () => {
      router.push({ path: "/activities" });
    },
    olders: () => {
      router.push({ path: "/olders" });
    },
    volunteers: () => {
      router.push({ path: "/volunteers" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../style/layout.scss';

</style>