import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, E as validate_each_argument, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, h as claim_space, f as claim_text, g as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, o as set_data_dev, p as create_component, q as claim_component, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, y as query_selector_all, F as check_outros, G as destroy_each, H as group_outros } from './client.51d7c3b3.js';
import { B as Button } from './Button.c7c57b9f.js';
import { P as PortfolioSettings } from './SiteSettings.e9575efe.js';

/* src/routes/portfolio/page/index.svelte generated by Svelte v3.23.0 */
const file = "src/routes/portfolio/page/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (117:10) {#if post.featuredImage}
function create_if_block_1(ctx) {
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
			attr_dev(img, "alt", img_alt_value = "" + (/*post*/ ctx[3].title + " featured image"));
			if (img.src !== (img_src_value = /*post*/ ctx[3].featuredImage)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-1cel2b2");
			add_location(img, file, 120, 16, 2722);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", a_href_value = "portfolio/" + /*post*/ ctx[3].category + "/" + /*post*/ ctx[3].slug);
			add_location(a, file, 118, 14, 2641);
			attr_dev(div, "class", "awm-portfolio-featured-image-wrappper svelte-1cel2b2");
			add_location(div, file, 117, 12, 2575);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, a);
			append_dev(a, img);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && img_alt_value !== (img_alt_value = "" + (/*post*/ ctx[3].title + " featured image"))) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*posts*/ 1 && img.src !== (img_src_value = /*post*/ ctx[3].featuredImage)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*posts*/ 1 && a_href_value !== (a_href_value = "portfolio/" + /*post*/ ctx[3].category + "/" + /*post*/ ctx[3].slug)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(117:10) {#if post.featuredImage}",
		ctx
	});

	return block;
}

// (111:6) {#each posts as post}
function create_each_block(ctx) {
	let div;
	let t0;
	let span;
	let t1_value = /*post*/ ctx[3].title + "";
	let t1;
	let t2;
	let if_block = /*post*/ ctx[3].featuredImage && create_if_block_1(ctx);

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
			attr_dev(span, "class", "awm-portfolio-item-title svelte-1cel2b2");
			add_location(span, file, 127, 10, 2890);
			add_location(div, file, 115, 8, 2522);
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
			if (/*post*/ ctx[3].featuredImage) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(div, t0);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*posts*/ 1 && t1_value !== (t1_value = /*post*/ ctx[3].title + "")) set_data_dev(t1, t1_value);
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
		source: "(111:6) {#each posts as post}",
		ctx
	});

	return block;
}

// (137:2) {#if !isLastPage}
function create_if_block(ctx) {
	let current;

	const button = new Button({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler*/ ctx[2]);

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

			if (dirty & /*$$scope*/ 64) {
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
		source: "(137:2) {#if !isLastPage}",
		ctx
	});

	return block;
}

// (138:4) <Button on:click={() => (window.location.href = '/blog/page/2')}>
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
		source: "(138:4) <Button on:click={() => (window.location.href = '/blog/page/2')}>",
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
	let div2;
	let div0;
	let h2;
	let t3;
	let t4;
	let ul;
	let li0;
	let t5;
	let t6;
	let li1;
	let t7;
	let t8;
	let li2;
	let t9;
	let t10;
	let div1;
	let t11;
	let div3;
	let current;
	let each_value = /*posts*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	let if_block = !/*isLastPage*/ ctx[1] && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			h1 = element("h1");
			t1 = text("Portfolio");
			t2 = space();
			div2 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t3 = text("Portfolio Categories");
			t4 = space();
			ul = element("ul");
			li0 = element("li");
			t5 = text("UX Design");
			t6 = space();
			li1 = element("li");
			t7 = text("UI Design");
			t8 = space();
			li2 = element("li");
			t9 = text("Graphic Design");
			t10 = space();
			div1 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t11 = space();
			div3 = element("div");
			if (if_block) if_block.c();
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
			div2 = claim_element(section_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, "Portfolio Categories");
			h2_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			ul = claim_element(div0_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			t5 = claim_text(li0_nodes, "UX Design");
			li0_nodes.forEach(detach_dev);
			t6 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			t7 = claim_text(li1_nodes, "UI Design");
			li1_nodes.forEach(detach_dev);
			t8 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", { class: true });
			var li2_nodes = children(li2);
			t9 = claim_text(li2_nodes, "Graphic Design");
			li2_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t10 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div1_nodes);
			}

			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			t11 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			if (if_block) if_block.l(div3_nodes);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Portfolio";
			attr_dev(h1, "class", "svelte-1cel2b2");
			add_location(h1, file, 99, 2, 1968);
			attr_dev(h2, "class", "svelte-1cel2b2");
			add_location(h2, file, 102, 6, 2077);
			attr_dev(li0, "class", "svelte-1cel2b2");
			add_location(li0, file, 104, 8, 2126);
			attr_dev(li1, "class", "svelte-1cel2b2");
			add_location(li1, file, 105, 8, 2153);
			attr_dev(li2, "class", "svelte-1cel2b2");
			add_location(li2, file, 106, 8, 2180);
			attr_dev(ul, "class", "svelte-1cel2b2");
			add_location(ul, file, 103, 6, 2113);
			attr_dev(div0, "class", "awm-portfolio-category-list svelte-1cel2b2");
			add_location(div0, file, 101, 4, 2029);
			attr_dev(div1, "class", "awm-portfolio-grid svelte-1cel2b2");
			add_location(div1, file, 109, 4, 2231);
			attr_dev(div2, "class", "awm-portfolio-wrapper svelte-1cel2b2");
			add_location(div2, file, 100, 2, 1989);
			attr_dev(section, "id", "awm-portfolio");
			attr_dev(section, "class", "svelte-1cel2b2");
			add_location(section, file, 98, 0, 1937);
			attr_dev(div3, "class", "awm-portfolio-paging svelte-1cel2b2");
			add_location(div3, file, 134, 0, 3010);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, h1);
			append_dev(h1, t1);
			append_dev(section, t2);
			append_dev(section, div2);
			append_dev(div2, div0);
			append_dev(div0, h2);
			append_dev(h2, t3);
			append_dev(div0, t4);
			append_dev(div0, ul);
			append_dev(ul, li0);
			append_dev(li0, t5);
			append_dev(ul, t6);
			append_dev(ul, li1);
			append_dev(li1, t7);
			append_dev(ul, t8);
			append_dev(ul, li2);
			append_dev(li2, t9);
			append_dev(div2, t10);
			append_dev(div2, div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			insert_dev(target, t11, anchor);
			insert_dev(target, div3, anchor);
			if (if_block) if_block.m(div3, null);
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
						each_blocks[i].m(div1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (!/*isLastPage*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*isLastPage*/ 2) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div3, null);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(div3);
			if (if_block) if_block.d();
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
		const isLastPage = posts.length <= PortfolioSettings.postsPerPage * 1;
		const pagedPosts = posts.slice(0, PortfolioSettings.postsPerPage);
		return { isLastPage, posts: pagedPosts };
	});
}

function instance($$self, $$props, $$invalidate) {
	let { posts } = $$props;
	let { isLastPage } = $$props;
	const writable_props = ["posts", "isLastPage"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Page> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Page", $$slots, []);
	const click_handler = () => window.location.href = "/blog/page/2";

	$$self.$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
		if ("isLastPage" in $$props) $$invalidate(1, isLastPage = $$props.isLastPage);
	};

	$$self.$capture_state = () => ({
		PortfolioSettings,
		Button,
		preload,
		posts,
		isLastPage
	});

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
		if ("isLastPage" in $$props) $$invalidate(1, isLastPage = $$props.isLastPage);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [posts, isLastPage, click_handler];
}

class Page extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0, isLastPage: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Page",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<Page> was created without expected prop 'posts'");
		}

		if (/*isLastPage*/ ctx[1] === undefined && !("isLastPage" in props)) {
			console.warn("<Page> was created without expected prop 'isLastPage'");
		}
	}

	get posts() {
		throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isLastPage() {
		throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isLastPage(value) {
		throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Page;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTQxNTcyMzcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcG9ydGZvbGlvL3BhZ2UvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBpbXBvcnQgeyBQb3J0Zm9saW9TZXR0aW5ncyB9IGZyb20gXCIuLi8uLi8uLi9TaXRlU2V0dGluZ3MuanNcIjtcbiAgaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnN2ZWx0ZVwiO1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG4gICAgcmV0dXJuIHRoaXMuZmV0Y2goYC4uL3BvcnRmb2xpby5qc29uYClcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihwb3N0cyA9PiB7XG4gICAgICAgIGNvbnN0IGlzTGFzdFBhZ2UgPSBwb3N0cy5sZW5ndGggPD0gUG9ydGZvbGlvU2V0dGluZ3MucG9zdHNQZXJQYWdlICogMTtcblxuICAgICAgICBjb25zdCBwYWdlZFBvc3RzID0gcG9zdHMuc2xpY2UoMCwgUG9ydGZvbGlvU2V0dGluZ3MucG9zdHNQZXJQYWdlKTtcbiAgICAgICAgcmV0dXJuIHsgaXNMYXN0UGFnZSwgcG9zdHM6IHBhZ2VkUG9zdHMgfTtcbiAgICAgIH0pO1xuICB9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGxldCBwb3N0cztcbiAgZXhwb3J0IGxldCBpc0xhc3RQYWdlO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgI2F3bS1wb3J0Zm9saW8ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG4gIGgxLFxuICBoMiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG5cbiAgLmF3bS1wb3J0Zm9saW8td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG5cbiAgLmF3bS1wb3J0Zm9saW8tY2F0ZWdvcnktbGlzdCB7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIH1cblxuICAuYXdtLXBvcnRmb2xpby1jYXRlZ29yeS1saXN0IHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5hd20tcG9ydGZvbGlvLWNhdGVnb3J5LWxpc3QgdWwgbGkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzY2NjtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgLmF3bS1wb3J0Zm9saW8tZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XG4gICAgZ3JpZC1nYXA6IDIwcHg7XG4gIH1cblxuICAuYXdtLXBvcnRmb2xpby1mZWF0dXJlZC1pbWFnZS13cmFwcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICB9XG5cbiAgLmF3bS1wb3J0Zm9saW8tZmVhdHVyZWQtaW1hZ2Utd3JhcHBwZXIgaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuYXdtLXBvcnRmb2xpby1pdGVtLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLmF3bS1wb3J0Zm9saW8tcGFnaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPlBvcnRmb2xpbzwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbiBpZD1cImF3bS1wb3J0Zm9saW9cIj5cbiAgPGgxPlBvcnRmb2xpbzwvaDE+XG4gIDxkaXYgY2xhc3M9XCJhd20tcG9ydGZvbGlvLXdyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYXdtLXBvcnRmb2xpby1jYXRlZ29yeS1saXN0XCI+XG4gICAgICA8aDI+UG9ydGZvbGlvIENhdGVnb3JpZXM8L2gyPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+VVggRGVzaWduPC9saT5cbiAgICAgICAgPGxpPlVJIERlc2lnbjwvbGk+XG4gICAgICAgIDxsaT5HcmFwaGljIERlc2lnbjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhd20tcG9ydGZvbGlvLWdyaWRcIj5cbiAgICAgIHsjZWFjaCBwb3N0cyBhcyBwb3N0fVxuICAgICAgICA8IS0tIHdlJ3JlIHVzaW5nIHRoZSBub24tc3RhbmRhcmQgYHJlbD1wcmVmZXRjaGAgYXR0cmlidXRlIHRvXG5cdFx0XHRcdHRlbGwgU2FwcGVyIHRvIGxvYWQgdGhlIGRhdGEgZm9yIHRoZSBwYWdlIGFzIHNvb24gYXNcblx0XHRcdFx0dGhlIHVzZXIgaG92ZXJzIG92ZXIgdGhlIGxpbmsgb3IgdGFwcyBpdCwgaW5zdGVhZCBvZlxuXHRcdFx0XHR3YWl0aW5nIGZvciB0aGUgJ2NsaWNrJyBldmVudCAtLT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7I2lmIHBvc3QuZmVhdHVyZWRJbWFnZX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhd20tcG9ydGZvbGlvLWZlYXR1cmVkLWltYWdlLXdyYXBwcGVyXCI+XG4gICAgICAgICAgICAgIDxhIHJlbD1cInByZWZldGNoXCIgaHJlZj1cInBvcnRmb2xpby97cG9zdC5jYXRlZ29yeX0ve3Bvc3Quc2x1Z31cIj5cblxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGFsdD1cIntwb3N0LnRpdGxlfSBmZWF0dXJlZCBpbWFnZVwiXG4gICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuZmVhdHVyZWRJbWFnZX0gLz5cbiAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7L2lmfVxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXdtLXBvcnRmb2xpby1pdGVtLXRpdGxlXCI+e3Bvc3QudGl0bGV9PC9zcGFuPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgey9lYWNofVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbjxkaXYgY2xhc3M9XCJhd20tcG9ydGZvbGlvLXBhZ2luZ1wiPlxuXG4gIHsjaWYgIWlzTGFzdFBhZ2V9XG4gICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9ibG9nL3BhZ2UvMicpfT5cbiAgICAgIE5leHQgUGFnZVxuICAgIDwvQnV0dG9uPlxuICB7L2lmfVxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1REF5SHdCLEdBQUksSUFBQyxLQUFLOzZDQUNYLEdBQUksSUFBQyxhQUFhOzs7OzhEQUpRLEdBQUksSUFBQyxRQUFRLGtCQUFHLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7OztnRkFHbEQsR0FBSSxJQUFDLEtBQUs7Ozs7b0VBQ1gsR0FBSSxJQUFDLGFBQWE7Ozs7dUZBSlEsR0FBSSxJQUFDLFFBQVEsa0JBQUcsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBU3hCLEdBQUksSUFBQyxLQUFLOzs7eUJBWDdDLEdBQUksSUFBQyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBQWxCLEdBQUksSUFBQyxhQUFhOzs7Ozs7Ozs7Ozs7O2dFQVdpQixHQUFJLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFqQi9DLEdBQUs7Ozs7Z0NBQVYsTUFBSTs7OztnQ0EwQkosR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkExQkwsR0FBSzs7OzsrQkFBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozt1QkEwQkosR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FwSUEsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO1FBQzlCLElBQUksQ0FBQyxLQUFLLHNCQUNkLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFDaEIsSUFBSSxDQUFDLEtBQUs7UUFDSCxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxpQkFBaUIsQ0FBQyxZQUFZLEdBQUcsQ0FBQztRQUUvRCxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsWUFBWTtXQUN2RCxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVU7Ozs7O09BTWpDLEtBQUs7T0FDTCxVQUFVOzs7Ozs7Ozs7NkJBdUhNLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
