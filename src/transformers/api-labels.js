
export default function attacher()
{
	return transformer;
}

const PLATFORMS = ['macOS', 'Windows', 'Linux'];
const DEPRECATED = 'Deprecated';
const EXPERIMENTAL = 'Experimental';
const NIGHTLY = 'Nightly';
const NIGHTLY_DOCS_PATH = '/docs/installation/nightly';

function transformer(tree)
{
	walk(tree);
}

function walk(node)
{
	if(!node || typeof node !== 'object')
	{
		return;
	}

	if(node.type === 'emphasis')
	{
		visitor(node);
	}

	if(Array.isArray(node.children))
	{
		for(const child of node.children)
		{
			walk(child);
		}
	}
}

/*
	badge--primary
	badge--secondary
	badge--success
	badge--info
	badge--warning
	badge--danger
*/

function visitor(node)
{
	if(node.children.length === 1 && node.children[0].type === 'text')
	{
		const tag = node.children[0].value;

		if(PLATFORMS.includes(tag))
		{
			node.data = {
				hName: 'span',
				hProperties: {className: ['badge badge--secondary']},
			};
		}
		else if(tag === DEPRECATED)
		{
			node.data = {
				hName: 'span',
				hProperties: {className: ['badge badge--danger']},
			};
		}
		else if(tag === EXPERIMENTAL)
		{
			node.data = {
				hName: 'a',
				hProperties: {
					className: ['badge badge--warning'],
					href: NIGHTLY_DOCS_PATH,
				},
			};
		}
		else if(tag === NIGHTLY)
		{
			node.data = {
				hName: 'a',
				hProperties: {
					className: ['badge badge--info'],
					href: NIGHTLY_DOCS_PATH,
				},
			};
		}
	}
}