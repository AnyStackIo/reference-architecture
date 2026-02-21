module.exports = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Resources",
      items: [
        "resources/architecture-diagrams",
        {
          type: "category",
          label: "Diagrams",
          items: [
            "resources/diagrams/landing-zone",
            "resources/diagrams/vpc-hub-spoke",
            "resources/diagrams/eks-platform",
            "resources/diagrams/cicd-gitops",
            "resources/diagrams/observability",
            "resources/diagrams/data-pipeline",
          ],
        },
      ],
    },
  ],
};
