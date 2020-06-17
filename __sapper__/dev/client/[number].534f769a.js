import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, E as validate_each_argument, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, h as claim_space, f as claim_text, g as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, o as set_data_dev, p as create_component, q as claim_component, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, y as query_selector_all, F as check_outros, G as destroy_each, H as group_outros } from './client.51d7c3b3.js';
import { B as Button } from './Button.c7c57b9f.js';
import { C as CategoryList } from './CategoryList.5a5079a8.js';
import { P as PortfolioSettings } from './SiteSettings.e9575efe.js';

/* src/routes/portfolio/page/[number].svelte generated by Svelte v3.23.0 */
const file = "src/routes/portfolio/page/[number].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i];
	return child_ctx;
}

// (99:10) {#if post.featuredImage}
function create_if_block_2(ctx) {
	let div;
	let a;
	let img;
	let img_alt_value;
	let img_src_value;
	let a_href_value;

	const block = {
		c: function create() {
			div = element("div");
			a = element("a");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			a = claim_element(div_nodes, "A", { rel: true, href: true });
			var a_nodes = children(a);
			img = claim_element(a_nodes, "IMG", { alt: true, src: true, class: true });
			a_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "alt", img_alt_value = "" + (/*post*/ ctx[5].title + " featured image"));
			if (img.src !== (img_src_value = /*post*/ ctx[5].featuredImage)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-398vlu");
			add_location(img, file, 102, 16, 2524);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", a_href_value = "portfolio/" + /*post*/ ctx[5].category + "/" + /*post*/ ctx[5].slug);
			add_location(a, file, 100, 14, 2443);
			attr_dev(div, "class", "awm-portfolio-featured-image-wrappper svelte-398vlu");
			add_location(div, file, 99, 12, 2377);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, a);
			append_dev(a, img);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && img_alt_value !== (img_alt_value = "" + (/*post*/ ctx[5].title + " featured image"))) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*posts*/ 1 && img.src !== (img_src_value = /*post*/ ctx[5].featuredImage)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*posts*/ 1 && a_href_value !== (a_href_value = "portfolio/" + /*post*/ ctx[5].category + "/" + /*post*/ ctx[5].slug)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(99:10) {#if post.featuredImage}",
		ctx
	});

	return block;
}

// (93:6) {#each posts as post}
function create_each_block(ctx) {
	let div;
	let t0;
	let span;
	let t1_value = /*post*/ ctx[5].title + "";
	let t1;
	let t2;
	let if_block = /*post*/ ctx[5].featuredImage && create_if_block_2(ctx);

	const block = {
		c: function create() {
			div = element("div");
			if (if_block) if_block.c();
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			if (if_block) if_block.l(div_nodes);
			t0 = claim_space(div_nodes);
			span = claim_element(div_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, t1_value);
			span_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "awm-portfolio-item-title svelte-398vlu");
			add_location(span, file, 109, 10, 2692);
			add_location(div, file, 97, 8, 2324);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			if (if_block) if_block.m(div, null);
			append_dev(div, t0);
			append_dev(div, span);
			append_dev(span, t1);
			append_dev(div, t2);
		},
		p: function update(ctx, dirty) {
			if (/*post*/ ctx[5].featuredImage) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					if_block.m(div, t0);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*posts*/ 1 && t1_value !== (t1_value = /*post*/ ctx[5].title + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (if_block) if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(93:6) {#each posts as post}",
		ctx
	});

	return block;
}

// (118:2) {#if pageNumber > 1}
function create_if_block_1(ctx) {
	let current;

	const button = new Button({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler*/ ctx[3]);

	const block = {
		c: function create() {
			create_component(button.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button_changes = {};

			if (dirty & /*$$scope*/ 256) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(118:2) {#if pageNumber > 1}",
		ctx
	});

	return block;
}

// (119:4) <Button       on:click={() => (window.location.href = '/portfolio/page/' + (pageNumber - 1))}>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Previous Page");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Previous Page");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(119:4) <Button       on:click={() => (window.location.href = '/portfolio/page/' + (pageNumber - 1))}>",
		ctx
	});

	return block;
}

// (124:2) {#if !isLastPage}
function create_if_block(ctx) {
	let current;

	const button = new Button({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler_1*/ ctx[4]);

	const block = {
		c: function create() {
			create_component(button.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button_changes = {};

			if (dirty & /*$$scope*/ 256) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(124:2) {#if !isLastPage}",
		ctx
	});

	return block;
}

// (125:4) <Button       on:click={() => (window.location.href = '/portfolio/page/' + (pageNumber + 1))}>
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Next Page");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Next Page");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(125:4) <Button       on:click={() => (window.location.href = '/portfolio/page/' + (pageNumber + 1))}>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let section;
	let h1;
	let t1;
	let t2;
	let div1;
	let t3;
	let div0;
	let t4;
	let div2;
	let t5;
	let current;

	const categorylist = new CategoryList({
			props: { categories: PortfolioSettings.categories },
			$$inline: true
		});

	let each_value = /*posts*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	let if_block0 = /*pageNumber*/ ctx[1] > 1 && create_if_block_1(ctx);
	let if_block1 = !/*isLastPage*/ ctx[2] && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			h1 = element("h1");
			t1 = text("Portfolio");
			t2 = space();
			div1 = element("div");
			create_component(categorylist.$$.fragment);
			t3 = space();
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t4 = space();
			div2 = element("div");
			if (if_block0) if_block0.c();
			t5 = space();
			if (if_block1) if_block1.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-nhhy6p\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { id: true, class: true });
			var section_nodes = children(section);
			h1 = claim_element(section_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Portfolio");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(categorylist.$$.fragment, div1_nodes);
			t3 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			if (if_block0) if_block0.l(div2_nodes);
			t5 = claim_space(div2_nodes);
			if (if_block1) if_block1.l(div2_nodes);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Portfolio";
			attr_dev(h1, "class", "svelte-398vlu");
			add_location(h1, file, 87, 2, 1908);
			attr_dev(div0, "class", "awm-portfolio-grid svelte-398vlu");
			add_location(div0, file, 91, 4, 2033);
			attr_dev(div1, "class", "awm-portfolio-wrapper svelte-398vlu");
			add_location(div1, file, 88, 2, 1929);
			attr_dev(section, "id", "awm-portfolio");
			attr_dev(section, "class", "svelte-398vlu");
			add_location(section, file, 86, 0, 1877);
			attr_dev(div2, "class", "awm-portfolio-paging svelte-398vlu");
			add_location(div2, file, 116, 0, 2812);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, h1);
			append_dev(h1, t1);
			append_dev(section, t2);
			append_dev(section, div1);
			mount_component(categorylist, div1, null);
			append_dev(div1, t3);
			append_dev(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			insert_dev(target, t4, anchor);
			insert_dev(target, div2, anchor);
			if (if_block0) if_block0.m(div2, null);
			append_dev(div2, t5);
			if (if_block1) if_block1.m(div2, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
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
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (/*pageNumber*/ ctx[1] > 1) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*pageNumber*/ 2) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div2, t5);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (!/*isLastPage*/ ctx[2]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*isLastPage*/ 4) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div2, null);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(categorylist.$$.fragment, local);
			transition_in(if_block0);
			transition_in(if_block1);
			current = true;
		},
		o: function outro(local) {
			transition_out(categorylist.$$.fragment, local);
			transition_out(if_block0);
			transition_out(if_block1);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
			destroy_component(categorylist);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(div2);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
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
	return this.fetch(`../portfolio.json`).then(r => r.json()).then(posts => {
		const isLastPage = posts.length <= PortfolioSettings.postsPerPage * params.number;
		const pagedPosts = posts.slice(PortfolioSettings.postsPerPage * (params.number - 1), PortfolioSettings.postsPerPage * (params.number - 1) + PortfolioSettings.postsPerPage);

		return {
			isLastPage,
			posts: pagedPosts,
			pageNumber: parseInt(params.number)
		};
	});
}

function instance($$self, $$props, $$invalidate) {
	let { posts } = $$props;
	let { pageNumber } = $$props;
	let { isLastPage } = $$props;
	const writable_props = ["posts", "pageNumber", "isLastPage"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bnumberu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("U5Bnumberu5D", $$slots, []);
	const click_handler = () => window.location.href = "/portfolio/page/" + (pageNumber - 1);
	const click_handler_1 = () => window.location.href = "/portfolio/page/" + (pageNumber + 1);

	$$self.$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
		if ("pageNumber" in $$props) $$invalidate(1, pageNumber = $$props.pageNumber);
		if ("isLastPage" in $$props) $$invalidate(2, isLastPage = $$props.isLastPage);
	};

	$$self.$capture_state = () => ({
		PortfolioSettings,
		Button,
		CategoryList,
		preload,
		posts,
		pageNumber,
		isLastPage
	});

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
		if ("pageNumber" in $$props) $$invalidate(1, pageNumber = $$props.pageNumber);
		if ("isLastPage" in $$props) $$invalidate(2, isLastPage = $$props.isLastPage);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [posts, pageNumber, isLastPage, click_handler, click_handler_1];
}

class U5Bnumberu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0, pageNumber: 1, isLastPage: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bnumberu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<U5Bnumberu5D> was created without expected prop 'posts'");
		}

		if (/*pageNumber*/ ctx[1] === undefined && !("pageNumber" in props)) {
			console.warn("<U5Bnumberu5D> was created without expected prop 'pageNumber'");
		}

		if (/*isLastPage*/ ctx[2] === undefined && !("isLastPage" in props)) {
			console.warn("<U5Bnumberu5D> was created without expected prop 'isLastPage'");
		}
	}

	get posts() {
		throw new Error("<U5Bnumberu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<U5Bnumberu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get pageNumber() {
		throw new Error("<U5Bnumberu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set pageNumber(value) {
		throw new Error("<U5Bnumberu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isLastPage() {
		throw new Error("<U5Bnumberu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isLastPage(value) {
		throw new Error("<U5Bnumberu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bnumberu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW251bWJlcl0uNTM0Zjc2OWEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcG9ydGZvbGlvL3BhZ2UvW251bWJlcl0uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBpbXBvcnQgeyBQb3J0Zm9saW9TZXR0aW5ncyB9IGZyb20gXCIuLi8uLi8uLi9TaXRlU2V0dGluZ3MuanNcIjtcbiAgaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnN2ZWx0ZVwiO1xuICBpbXBvcnQgQ2F0ZWdvcnlMaXN0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0NhdGVnb3J5TGlzdC9DYXRlZ29yeUxpc3Quc3ZlbHRlXCI7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICByZXR1cm4gdGhpcy5mZXRjaChgLi4vcG9ydGZvbGlvLmpzb25gKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKHBvc3RzID0+IHtcbiAgICAgICAgY29uc3QgaXNMYXN0UGFnZSA9XG4gICAgICAgICAgcG9zdHMubGVuZ3RoIDw9IFBvcnRmb2xpb1NldHRpbmdzLnBvc3RzUGVyUGFnZSAqIHBhcmFtcy5udW1iZXI7XG4gICAgICAgIGNvbnN0IHBhZ2VkUG9zdHMgPSBwb3N0cy5zbGljZShcbiAgICAgICAgICBQb3J0Zm9saW9TZXR0aW5ncy5wb3N0c1BlclBhZ2UgKiAocGFyYW1zLm51bWJlciAtIDEpLFxuICAgICAgICAgIFBvcnRmb2xpb1NldHRpbmdzLnBvc3RzUGVyUGFnZSAqIChwYXJhbXMubnVtYmVyIC0gMSkgK1xuICAgICAgICAgICAgUG9ydGZvbGlvU2V0dGluZ3MucG9zdHNQZXJQYWdlXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaXNMYXN0UGFnZSxcbiAgICAgICAgICBwb3N0czogcGFnZWRQb3N0cyxcbiAgICAgICAgICBwYWdlTnVtYmVyOiBwYXJzZUludChwYXJhbXMubnVtYmVyKVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gIH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICBleHBvcnQgbGV0IHBvc3RzO1xuICBleHBvcnQgbGV0IHBhZ2VOdW1iZXI7XG4gIGV4cG9ydCBsZXQgaXNMYXN0UGFnZTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICNhd20tcG9ydGZvbGlvIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG5cbiAgaDEge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cblxuICAuYXdtLXBvcnRmb2xpby13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cblxuICAuYXdtLXBvcnRmb2xpby1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcbiAgICBncmlkLWdhcDogMjBweDtcbiAgfVxuXG4gIC5hd20tcG9ydGZvbGlvLWZlYXR1cmVkLWltYWdlLXdyYXBwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWJvcmRlci1jb2xvcik7XG4gIH1cblxuICAuYXdtLXBvcnRmb2xpby1mZWF0dXJlZC1pbWFnZS13cmFwcHBlciBpbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5hd20tcG9ydGZvbGlvLWl0ZW0tdGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAuYXdtLXBvcnRmb2xpby1wYWdpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+UG9ydGZvbGlvPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uIGlkPVwiYXdtLXBvcnRmb2xpb1wiPlxuICA8aDE+UG9ydGZvbGlvPC9oMT5cbiAgPGRpdiBjbGFzcz1cImF3bS1wb3J0Zm9saW8td3JhcHBlclwiPlxuICAgIDxDYXRlZ29yeUxpc3QgY2F0ZWdvcmllcz17UG9ydGZvbGlvU2V0dGluZ3MuY2F0ZWdvcmllc30gLz5cblxuICAgIDxkaXYgY2xhc3M9XCJhd20tcG9ydGZvbGlvLWdyaWRcIj5cbiAgICAgIHsjZWFjaCBwb3N0cyBhcyBwb3N0fVxuICAgICAgICA8IS0tIHdlJ3JlIHVzaW5nIHRoZSBub24tc3RhbmRhcmQgYHJlbD1wcmVmZXRjaGAgYXR0cmlidXRlIHRvXG5cdFx0XHRcdHRlbGwgU2FwcGVyIHRvIGxvYWQgdGhlIGRhdGEgZm9yIHRoZSBwYWdlIGFzIHNvb24gYXNcblx0XHRcdFx0dGhlIHVzZXIgaG92ZXJzIG92ZXIgdGhlIGxpbmsgb3IgdGFwcyBpdCwgaW5zdGVhZCBvZlxuXHRcdFx0XHR3YWl0aW5nIGZvciB0aGUgJ2NsaWNrJyBldmVudCAtLT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7I2lmIHBvc3QuZmVhdHVyZWRJbWFnZX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhd20tcG9ydGZvbGlvLWZlYXR1cmVkLWltYWdlLXdyYXBwcGVyXCI+XG4gICAgICAgICAgICAgIDxhIHJlbD1cInByZWZldGNoXCIgaHJlZj1cInBvcnRmb2xpby97cG9zdC5jYXRlZ29yeX0ve3Bvc3Quc2x1Z31cIj5cblxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGFsdD1cIntwb3N0LnRpdGxlfSBmZWF0dXJlZCBpbWFnZVwiXG4gICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuZmVhdHVyZWRJbWFnZX0gLz5cbiAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7L2lmfVxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXdtLXBvcnRmb2xpby1pdGVtLXRpdGxlXCI+e3Bvc3QudGl0bGV9PC9zcGFuPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgey9lYWNofVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbjxkaXYgY2xhc3M9XCJhd20tcG9ydGZvbGlvLXBhZ2luZ1wiPlxuICB7I2lmIHBhZ2VOdW1iZXIgPiAxfVxuICAgIDxCdXR0b25cbiAgICAgIG9uOmNsaWNrPXsoKSA9PiAod2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3BvcnRmb2xpby9wYWdlLycgKyAocGFnZU51bWJlciAtIDEpKX0+XG4gICAgICBQcmV2aW91cyBQYWdlXG4gICAgPC9CdXR0b24+XG4gIHsvaWZ9XG4gIHsjaWYgIWlzTGFzdFBhZ2V9XG4gICAgPEJ1dHRvblxuICAgICAgb246Y2xpY2s9eygpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcG9ydGZvbGlvL3BhZ2UvJyArIChwYWdlTnVtYmVyICsgMSkpfT5cbiAgICAgIE5leHQgUGFnZVxuICAgIDwvQnV0dG9uPlxuICB7L2lmfVxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dURBdUd3QixHQUFJLElBQUMsS0FBSzs2Q0FDWCxHQUFJLElBQUMsYUFBYTs7Ozs4REFKUSxHQUFJLElBQUMs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
