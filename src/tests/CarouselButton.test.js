import React from "react";
import Adapter from "enzyme-adapter-react-16";
import CarouselButton from "../CarouselButton";
import {shallow} from "enzyme";


describe("CarouselButton", () => {
    let wrapper;
    const text = 'Button text';
    beforeEach(() => {
     wrapper = shallow(<CarouselButton>{text}</CarouselButton>);

    })
    it("renders a button", () => {
        expect(wrapper.type()).toBe('button'); 
    })
    it("passes children through button", () => {
        expect(wrapper.prop("children")).toBe(text); 
    })
});