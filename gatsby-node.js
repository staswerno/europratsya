async function createCountryPages(graphql, actions) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityCountry {
        nodes {
          slug {
            current
          }
          id
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  const countryNodes = (result.data.allSanityCountry || {}).nodes || [];

  countryNodes.forEach((node) => {
    const { id, slug = {} } = node;
    if (!slug) return;

    const path = `/countries/${slug.current}`;

    createPage({
      path,
      component: require.resolve('./src/templates/country.jsx'),
      context: { id },
    });
  });
}

async function createEmployerPages(graphql, actions) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityCompany {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  const employerNodes = (result.data.allSanityCompany || {}).nodes || [];

  employerNodes.forEach((node) => {
    const { id, slug = {} } = node;
    if (!slug) return;
    const path = `/company/${slug.current}`;

    createPage({
      path,
      component: require.resolve('./src/templates/company.jsx'),
      context: { id: node.id },
    });
  });
}

async function createJobPages(graphql, actions) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityJobPost {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  const jobNodes = (result.data.allSanityJobPost || {}).nodes || [];

  jobNodes.forEach((node) => {
    const { id, slug = {} } = node;
    if (!slug) return;
    const path = `/job/${slug.current}`;

    createPage({
      path,
      component: require.resolve('./src/templates/job.jsx'),
      context: { id: node.id },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createCountryPages(graphql, actions);
  await createEmployerPages(graphql, actions);
  await createJobPages(graphql, actions);
};
