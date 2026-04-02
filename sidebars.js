module.exports = {
  tutorialSidebar: [
    "index",
    {
      type: "category",
      label: "Landing zone",
      items: [
        {
          type: "doc",
          id: "aws-organization",
          label: "AWS Accounts",
        },
        {
          type: "doc",
          id: "iam-sso",
          label: "Users and Permissions",
        },
        {
          type: "doc",
          id: "network-dns",
          label: "Network and DNS",
        },
      ],
    },
    {
      type: "category",
      label: "Platform",
      items: [
        {
          type: "category",
          label: "Containers",
          items: [
            "platform/ecs",
            "platform/eks",
          ],
        },
        {
          type: "category",
          label: "Software Delivery",
          link: { type: "doc", id: "software-delivery" },
          items: [
            "cicd/workflow",
            "cicd/runners",
            "cicd/oidc",
            "cicd/argocd",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Security",
      items: [
        "security/compliance",
        "security/defense-in-depth",
        "security/cloudtrail",
        "security/vpc-flow-logs",
      ],
    },
  ],
};
