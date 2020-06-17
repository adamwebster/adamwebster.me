import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, h as claim_space, f as claim_text, g as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, E as validate_each_argument, p as create_component, q as claim_component, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, J as empty, y as query_selector_all, F as check_outros, G as destroy_each, H as group_outros } from './client.a1fe98fc.js';
import { B as BlogSettings } from './SiteSettings.e9575efe.js';

/* src/components/Blog/BlogPost.svelte generated by Svelte v3.23.0 */

const file = "src/components/Blog/BlogPost.svelte";

function create_fragment(ctx) {
	let div1;
	let img;
	let img_src_value;
	let t0;
	let article;
	let h2;
	let a;
	let t1;
	let t2;
	let div0;
	let t3;
	let t4;
	let p;
	let t5;

	const block = {
		c: function create() {
			div1 = element("div");
			img = element("img");
			t0 = space();
			article = element("article");
			h2 = element("h2");
			a = element("a");
			t1 = text("Title of the Post");
			t2 = space();
			div0 = element("div");
			t3 = text("02/02/2020");
			t4 = space();
			p = element("p");
			t5 = text("This is some text of a blog post and would either be longer or shorter\n      then this...");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { alt: true, src: true, class: true });
			t0 = claim_space(div1_nodes);
			article = claim_element(div1_nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			h2 = claim_element(article_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			a = claim_element(h2_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, "Title of the Post");
			a_nodes.forEach(detach_dev);
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(article_nodes);
			div0 = claim_element(article_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t3 = claim_text(div0_nodes, "02/02/2020");
			div0_nodes.forEach(detach_dev);
			t4 = claim_space(article_nodes);
			p = claim_element(article_nodes, "P", {});
			var p_nodes = children(p);
			t5 = claim_text(p_nodes, "This is some text of a blog post and would either be longer or shorter\n      then this...");
			p_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "alt", "img1");
			if (img.src !== (img_src_value = "https://drscdn.500px.org/photo/163833279/q%3D80_m%3D2000/v2?sig=3dca74cf8cd24a1adf31367f43dbcac9adfcff4eb3a9c1f25919dfa0aea39d0d")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-1lrhzuf");
			add_location(img, file, 39, 2, 570);
			attr_dev(a, "href", "http://adamwebster.me");
			attr_dev(a, "class", "svelte-1lrhzuf");
			add_location(a, file, 44, 6, 794);
			attr_dev(h2, "class", "svelte-1lrhzuf");
			add_location(h2, file, 43, 4, 783);
			attr_dev(div0, "class", "date svelte-1lrhzuf");
			add_location(div0, file, 46, 4, 862);
			add_location(p, file, 47, 4, 901);
			attr_dev(article, "class", "awm-list-item-post-content svelte-1lrhzuf");
			add_location(article, file, 42, 2, 734);
			attr_dev(div1, "class", "awm-list-item svelte-1lrhzuf");
			add_location(div1, file, 38, 0, 540);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, img);
			append_dev(div1, t0);
			append_dev(div1, article);
			append_dev(article, h2);
			append_dev(h2, a);
			append_dev(a, t1);
			append_dev(article, t2);
			append_dev(article, div0);
			append_dev(div0, t3);
			append_dev(article, t4);
			append_dev(article, p);
			append_dev(p, t5);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
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

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<BlogPost> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("BlogPost", $$slots, []);
	return [];
}

class BlogPost extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "BlogPost",
			options,
			id: create_fragment.name
		});
	}
}

/* src/routes/blog/index.svelte generated by Svelte v3.23.0 */
const file$1 = "src/routes/blog/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (41:2) {#each posts as post}
function create_each_block(ctx) {
	let t;
	let current;
	const blogpost = new BlogPost({ $$inline: true });

	const block = {
		c: function create() {
			create_component(blogpost.$$.fragment);
			t = space();
		},
		l: function claim(nodes) {
			claim_component(blogpost.$$.fragment, nodes);
			t = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			mount_component(blogpost, target, anchor);
			insert_dev(target, t, anchor);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(blogpost.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(blogpost.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(blogpost, detaching);
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(41:2) {#each posts as post}",
		ctx
	});

	return block;
}

// (54:0) {#if !isLastPage}
function create_if_block(ctx) {
	let a;
	let t;

	const block = {
		c: function create() {
			a = element("a");
			t = text("Next Page");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, "Next Page");
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", "/blog/page/2");
			add_location(a, file$1, 54, 2, 1271);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(54:0) {#if !isLastPage}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let div;
	let t3;
	let if_block_anchor;
	let current;
	let each_value = /*posts*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	let if_block = !/*isLastPage*/ ctx[1] && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Recent posts");
			t2 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t3 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-10h7psl\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Recent posts");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			document.title = "Blog";
			add_location(h1, file$1, 36, 0, 808);
			attr_dev(div, "class", "awm-list-of-posts svelte-10zfgix");
			add_location(div, file$1, 38, 0, 831);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			insert_dev(target, t3, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*posts*/ 1) {
				const old_length = each_value.length;
				each_value = /*posts*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = old_length; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (!/*isLastPage*/ ctx[1]) {
				if (if_block) ; else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t3);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function preload({ params, query }) {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		const isLastPage = posts.length <= BlogSettings.postsPerPage * 1;
		const pagedPosts = posts.slice(0, BlogSettings.postsPerPage);
		return { isLastPage, posts: pagedPosts };
	});
}

function instance$1($$self, $$props, $$invalidate) {
	let { posts } = $$props;
	let { isLastPage } = $$props;
	const writable_props = ["posts", "isLastPage"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Blog> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Blog", $$slots, []);

	$$self.$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
		if ("isLastPage" in $$props) $$invalidate(1, isLastPage = $$props.isLastPage);
	};

	$$self.$capture_state = () => ({
		BlogSettings,
		BlogPost,
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

	return [posts, isLastPage];
}

class Blog extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { posts: 0, isLastPage: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blog",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<Blog> was created without expected prop 'posts'");
		}

		if (/*isLastPage*/ ctx[1] === undefined && !("isLastPage" in props)) {
			console.warn("<Blog> was created without expected prop 'isLastPage'");
		}
	}

	get posts() {
		throw new Error("<Blog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Blog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isLastPage() {
		throw new Error("<Blog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isLastPage(value) {
		throw new Error("<Blog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Blog;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzVlNTM4NjcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIGltcG9ydCB7IEJsb2dTZXR0aW5ncyB9IGZyb20gXCIuLi8uLi9TaXRlU2V0dGluZ3MuanNcIjtcbiAgaW1wb3J0IEJsb2dQb3N0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2cvQmxvZ1Bvc3Quc3ZlbHRlXCI7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICByZXR1cm4gdGhpcy5mZXRjaChgYmxvZy5qc29uYClcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihwb3N0cyA9PiB7XG4gICAgICAgIGNvbnN0IGlzTGFzdFBhZ2UgPSBwb3N0cy5sZW5ndGggPD0gQmxvZ1NldHRpbmdzLnBvc3RzUGVyUGFnZSAqIDE7XG5cbiAgICAgICAgY29uc3QgcGFnZWRQb3N0cyA9IHBvc3RzLnNsaWNlKDAsIEJsb2dTZXR0aW5ncy5wb3N0c1BlclBhZ2UpO1xuICAgICAgICByZXR1cm4geyBpc0xhc3RQYWdlLCBwb3N0czogcGFnZWRQb3N0cyB9O1xuICAgICAgfSk7XG4gIH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICBleHBvcnQgbGV0IHBvc3RzO1xuICBleHBvcnQgbGV0IGlzTGFzdFBhZ2U7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuYXdtLWxpc3Qtb2YtcG9zdHMge1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBmbGV4OiAxIDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdyaWQtZ2FwOiAyMHB4O1xuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5CbG9nPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT5SZWNlbnQgcG9zdHM8L2gxPlxuXG48ZGl2IGNsYXNzPVwiYXdtLWxpc3Qtb2YtcG9zdHNcIj5cblxuICB7I2VhY2ggcG9zdHMgYXMgcG9zdH1cbiAgICA8IS0tIHdlJ3JlIHVzaW5nIHRoZSBub24tc3RhbmRhcmQgYHJlbD1wcmVmZXRjaGAgYXR0cmlidXRlIHRvXG5cdFx0XHRcdHRlbGwgU2FwcGVyIHRvIGxvYWQgdGhlIGRhdGEgZm9yIHRoZSBwYWdlIGFzIHNvb24gYXNcblx0XHRcdFx0dGhlIHVzZXIgaG92ZXJzIG92ZXIgdGhlIGxpbmsgb3IgdGFwcyBpdCwgaW5zdGVhZCBvZlxuXHRcdFx0XHR3YWl0aW5nIGZvciB0aGUgJ2NsaWNrJyBldmVudCAtLT5cbiAgICA8QmxvZ1Bvc3QgLz5cbiAgICA8IS0tIDxsaT5cbiAgICAgIDxhIHJlbD1cInByZWZldGNoXCIgaHJlZj1cImJsb2cve3Bvc3QuY2F0ZWdvcnl9L3twb3N0LnNsdWd9XCI+e3Bvc3QudGl0bGV9PC9hPlxuICAgIDwvbGk+IC0tPlxuICB7L2VhY2h9XG5cbjwvZGl2PlxuXG57I2lmICFpc0xhc3RQYWdlfVxuICA8YSBocmVmPVwiL2Jsb2cvcGFnZS8yXCI+TmV4dCBQYWdlPC9hPlxuey9pZn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBd0NTLEdBQUs7Ozs7Z0NBQVYsTUFBSTs7Ozs7Ozs7Z0NBYUYsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQWJQLEdBQUs7Ozs7d0NBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7O3dCQUFKLE1BQUk7Ozs7Ozs7dUJBYUYsR0FBVTs7Ozs7Ozs7Ozs7Ozs7a0NBYlosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FwQ1UsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO1FBQzlCLElBQUksQ0FBQyxLQUFLLGNBQ2QsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUNoQixJQUFJLENBQUMsS0FBSztRQUNILFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxZQUFZLEdBQUcsQ0FBQztRQUUxRCxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLFlBQVk7V0FDbEQsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVOzs7OztPQU1qQyxLQUFLO09BQ0wsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
