type TemplateMetadata = {
  title: string;
  description?: string;
  tags?: Array<string>;
  createdby?: {
    name: string; // username
    id?: string; // github id
    url?: string; // repo or site url
  };
  dependences?: Array<string>;
};

interface TemplateInfo {
  path: string; //! remove this
  otherFiles: string[] | null;
  metadata: TemplateMetadata;
}

type Counter = {
  temps: number; // templates
  cols: number; // collections
};

type TemplateStructure = {
  tree: Record<string, TemplateStructure | TemplateInfo>;
  cnt: Counter; // counter
};

type TemplateModule = {
  default?: React.FunctionComponent;
};

type TemplatePageProps = {
  params: {
    temp: string[];
  };
  searchParams?: Record<string, string | string[]>;
}
