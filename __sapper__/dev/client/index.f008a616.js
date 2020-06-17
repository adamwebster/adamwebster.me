import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, E as validate_each_argument, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, o as set_data_dev, y as query_selector_all, n as noop, G as destroy_each } from './client.2c0c4e33.js';

/* src/routes/blog/[category]/index.svelte generated by Svelte v3.23.0 */

const file = "src/routes/blog/[category]/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (33:2) {#each posts as post}
function create_each_block(ctx) {
	let li;
	let a;
	let t0_value = /*post*/ ctx[2].title + "";
	let t0;
	let a_href_value;
	let t1;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { rel: true, href: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			a_nodes.forEach(detach_dev);
			t1 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", a_href_value = "blog/" + /*post*/ ctx[2].category + "/" + /*post*/ ctx[2].slug);
			add_location(a, file, 39, 6, 866);
			add_location(li, file, 38, 4, 855);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t0);
			append_dev(li, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && t0_value !== (t0_value = /*post*/ ctx[2].title + "")) set_data_dev(t0, t0_value);

			if (dirty & /*posts*/ 1 && a_href_value !== (a_href_value = "blog/" + /*post*/ ctx[2].category + "/" + /*post*/ ctx[2].slug)) {
				attr_dev(a, "href", a_href_value);
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
		source: "(33:2) {#each posts as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let t3;
	let ul;
	let each_value = /*posts*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text(/*categoryName*/ ctx[1]);
			t2 = text(" posts");
			t3 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-10h7psl\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, /*categoryName*/ ctx[1]);
			t2 = claim_text(h1_nodes, " posts");
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Blog";
			add_location(h1, file, 29, 0, 572);
			attr_dev(ul, "class", "svelte-1uzksw3");
			add_location(ul, file, 31, 0, 603);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			append_dev(h1, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*categoryName*/ 2) set_data_dev(t1, /*categoryName*/ ctx[1]);

			if (dirty & /*posts*/ 1) {
				each_value = /*posts*/ ctx[0];
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
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(ul);
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

function preload({ params, query }) {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		const filteredPostByCategory = posts.filter(post => post.category === params.category);

		return {
			categoryName: params.category,
			posts: filteredPostByCategory
		};
	});
}

function instance($$self, $$props, $$invalidate) {
	let { posts } = $$props;
	let { categoryName } = $$props;
	const writable_props = ["posts", "categoryName"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bcategoryu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Bcategoryu5D", $$slots, []);

	$$self.$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
		if ("categoryName" in $$props) $$invalidate(1, categoryName = $$props.categoryName);
	};

	$$self.$capture_state = () => ({ preload, posts, categoryName });

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
		if ("categoryName" in $$props) $$invalidate(1, categoryName = $$props.categoryName);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [posts, categoryName];
}

class U5Bcategoryu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0, categoryName: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bcategoryu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<U5Bcategoryu5D> was created without expected prop 'posts'");
		}

		if (/*categoryName*/ ctx[1] === undefined && !("categoryName" in props)) {
			console.warn("<U5Bcategoryu5D> was created without expected prop 'categoryName'");
		}
	}

	get posts() {
		throw new Error("<U5Bcategoryu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<U5Bcategoryu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get categoryName() {
		throw new Error("<U5Bcategoryu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set categoryName(value) {
		throw new Error("<U5Bcategoryu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bcategoryu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZjAwOGE2MTYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9bY2F0ZWdvcnldL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICByZXR1cm4gdGhpcy5mZXRjaChgYmxvZy5qc29uYClcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihwb3N0cyA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUG9zdEJ5Q2F0ZWdvcnkgPSBwb3N0cy5maWx0ZXIoXG4gICAgICAgICAgcG9zdCA9PiBwb3N0LmNhdGVnb3J5ID09PSBwYXJhbXMuY2F0ZWdvcnlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtjYXRlZ29yeU5hbWU6IHBhcmFtcy5jYXRlZ29yeSwgcG9zdHM6IGZpbHRlcmVkUG9zdEJ5Q2F0ZWdvcnkgfTtcbiAgICAgIH0pO1xuICB9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBwb3N0cztcbiAgZXhwb3J0IGxldCBjYXRlZ29yeU5hbWU7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICB1bCB7XG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+QmxvZzwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+e2NhdGVnb3J5TmFtZX0gcG9zdHM8L2gxPlxuXG48dWw+XG4gIHsjZWFjaCBwb3N0cyBhcyBwb3N0fVxuICAgIDwhLS0gd2UncmUgdXNpbmcgdGhlIG5vbi1zdGFuZGFyZCBgcmVsPXByZWZldGNoYCBhdHRyaWJ1dGUgdG9cblx0XHRcdFx0dGVsbCBTYXBwZXIgdG8gbG9hZCB0aGUgZGF0YSBmb3IgdGhlIHBhZ2UgYXMgc29vbiBhc1xuXHRcdFx0XHR0aGUgdXNlciBob3ZlcnMgb3ZlciB0aGUgbGluayBvciB0YXBzIGl0LCBpbnN0ZWFkIG9mXG5cdFx0XHRcdHdhaXRpbmcgZm9yIHRoZSAnY2xpY2snIGV2ZW50IC0tPlxuXG4gICAgPGxpPlxuICAgICAgPGEgcmVsPVwicHJlZmV0Y2hcIiBocmVmPVwiYmxvZy97cG9zdC5jYXRlZ29yeX0ve3Bvc3Quc2x1Z31cIj57cG9zdC50aXRsZX08L2E+XG4gICAgPC9saT5cbiAgey9lYWNofVxuPC91bD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3lCQXVDaUUsR0FBSSxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lEQUF2QyxHQUFJLElBQUMsUUFBUSxrQkFBRyxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Z0VBQUksR0FBSSxJQUFDLEtBQUs7O2tGQUF2QyxHQUFJLElBQUMsUUFBUSxrQkFBRyxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQVBwRCxHQUFLOzs7O2dDQUFWLE1BQUk7Ozs7Ozs7OzhCQUhILEdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUFaLEdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRUFBWixHQUFZOzs7MkJBR1IsR0FBSzs7OzsrQkFBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0EvQlUsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO1FBQzlCLElBQUksQ0FBQyxLQUFLLGNBQ2QsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUNoQixJQUFJLENBQUMsS0FBSztRQUNILHNCQUFzQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQ3pDLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxRQUFROzs7R0FFbkMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxRQUFRO0dBQUUsS0FBSyxFQUFFLHNCQUFzQjs7Ozs7O09BTS9ELEtBQUs7T0FDTCxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
