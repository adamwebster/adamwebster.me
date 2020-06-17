import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, E as validate_each_argument, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, h as claim_space, g as detach_dev, I as set_style, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, o as set_data_dev, n as noop, G as destroy_each } from './client.51d7c3b3.js';

/* src/components/CategoryList/CategoryList.svelte generated by Svelte v3.23.0 */

const file = "src/components/CategoryList/CategoryList.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (35:4) {#each categories as category}
function create_each_block(ctx) {
	let li;
	let t0_value = /*category*/ ctx[1].name + "";
	let t0;
	let t1;

	const block = {
		c: function create() {
			li = element("li");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { style: true, class: true });
			var li_nodes = children(li);
			t0 = claim_text(li_nodes, t0_value);
			t1 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(li, "background-color", /*category*/ ctx[1].bgColor);
			set_style(li, "color", /*category*/ ctx[1].borderColor);
			set_style(li, "border", "solid 1px $" + /*category*/ ctx[1].borderColor);
			attr_dev(li, "class", "svelte-1ayha8f");
			add_location(li, file, 35, 6, 610);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t0);
			append_dev(li, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*categories*/ 1 && t0_value !== (t0_value = /*category*/ ctx[1].name + "")) set_data_dev(t0, t0_value);

			if (dirty & /*categories*/ 1) {
				set_style(li, "background-color", /*category*/ ctx[1].bgColor);
			}

			if (dirty & /*categories*/ 1) {
				set_style(li, "color", /*category*/ ctx[1].borderColor);
			}

			if (dirty & /*categories*/ 1) {
				set_style(li, "border", "solid 1px $" + /*category*/ ctx[1].borderColor);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(35:4) {#each categories as category}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let h2;
	let t0;
	let t1;
	let ul;
	let each_value = /*categories*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");
			h2 = element("h2");
			t0 = text("Portfolio Categories");
			t1 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h2 = claim_element(div_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Portfolio Categories");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			ul = claim_element(div_nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-1ayha8f");
			add_location(h2, file, 32, 2, 532);
			attr_dev(ul, "class", "svelte-1ayha8f");
			add_location(ul, file, 33, 2, 564);
			attr_dev(div, "class", "awm-category-list svelte-1ayha8f");
			add_location(div, file, 31, 0, 498);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h2);
			append_dev(h2, t0);
			append_dev(div, t1);
			append_dev(div, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*categories*/ 1) {
				each_value = /*categories*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { categories = [] } = $$props;
	const writable_props = ["categories"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<CategoryList> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("CategoryList", $$slots, []);

	$$self.$set = $$props => {
		if ("categories" in $$props) $$invalidate(0, categories = $$props.categories);
	};

	$$self.$capture_state = () => ({ categories });

	$$self.$inject_state = $$props => {
		if ("categories" in $$props) $$invalidate(0, categories = $$props.categories);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [categories];
}

class CategoryList extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { categories: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CategoryList",
			options,
			id: create_fragment.name
		});
	}

	get categories() {
		throw new Error("<CategoryList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set categories(value) {
		throw new Error("<CategoryList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { CategoryList as C };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlMaXN0LjVhNTA3OWE4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yeUxpc3QvQ2F0ZWdvcnlMaXN0LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBleHBvcnQgbGV0IGNhdGVnb3JpZXMgPSBbXTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIGgyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cblxuICAuYXdtLWNhdGVnb3J5LWxpc3Qge1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLmF3bS1jYXRlZ29yeS1saXN0IHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5hd20tY2F0ZWdvcnktbGlzdCB1bCBsaSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNjY2O1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImF3bS1jYXRlZ29yeS1saXN0XCI+XG4gIDxoMj5Qb3J0Zm9saW8gQ2F0ZWdvcmllczwvaDI+XG4gIDx1bD5cbiAgICB7I2VhY2ggY2F0ZWdvcmllcyBhcyBjYXRlZ29yeX1cbiAgICAgIDxsaVxuICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHtjYXRlZ29yeS5iZ0NvbG9yfTsgY29sb3I6IHtjYXRlZ29yeS5ib3JkZXJDb2xvcn07XG4gICAgICAgIGJvcmRlcjpzb2xpZCAxcHggJHtjYXRlZ29yeS5ib3JkZXJDb2xvcn1cIj5cbiAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICA8L2xpPlxuICAgIHsvZWFjaH1cbiAgPC91bD5cblxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OzZCQXNDUyxHQUFRLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBRlksR0FBUSxJQUFDLE9BQU87dUNBQVcsR0FBUSxJQUFDLFdBQVc7d0RBQ3RELEdBQVEsSUFBQyxXQUFXOzs7Ozs7Ozs7O3lFQUN0QyxHQUFRLElBQUMsSUFBSTs7O21EQUZZLEdBQVEsSUFBQyxPQUFPOzs7O3dDQUFXLEdBQVEsSUFBQyxXQUFXOzs7O3lEQUN0RCxHQUFRLElBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FIcEMsR0FBVTs7OztnQ0FBZixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUFDLEdBQVU7Ozs7K0JBQWYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWpDRyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
