import { shallowMount } from "@vue/test-utils";
import ClassCard from "../src/components/ClassCard.vue";

describe('ClassCard.vue', () => {
    it('renders props when passed', () => {
        const className = 'Pilates Basics';
        const instructor = 'Jane Doe';
        const time = '10:00 AM';

        const wrapper = shallowMount(ClassCard, {
            props: { className, instructor, time },
        });

        expect(wrapper.find('h2').text()).toBe(className);
        expect(wrapper.findAll('p').at(0).text()).toBe(instructor);
        expect(wrapper.findAll('p').at(1).text()).toBe(time);
    });
});