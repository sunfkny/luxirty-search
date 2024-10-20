declare module '*.vue' {
  import type { ComponentOptions } from 'vue';
  const component: ComponentOptions;
  export default component;
}

type GscResultObject = Partial<{
  content: string;
  contentNoFormatting: string;
  contextUrl: string;
  fileFormat: string;
  image: {
    height: number;
    url: string;
    width: number;
  };
  perResultLabels: Array<{
    anchor: string;
    label: string;
    labelWithOp: string;
  }>;
  richSnippet: any;
  thumbnailImage: {
    height: number;
    url: string;
    width: number;
  };
  title: string;
  titleNoFormatting: string;
  url: string;
  visibleUrl: string;
}>;

type GscPromotion = Partial<{
  content: string;
  image: {
    height: number;
    url: string;
    width: number;
  };
  title: string;
  url: string;
  visibleUrl: string;
}>;

type ComponentConfig = {
  div: string | Element;
  tag: 'search' | 'searchbox' | 'searchbox-only' | 'searchresults-only';
  gname?: string;
  attributes?: Record<string, unknown>;
};

type OptComponentConfig = {
  div: string;
  tag: 'searchresults';
  gname?: string;
  attributes?: Record<string, unknown>;
};

type ElementObject = {
  gname: string;
  type: string;
  uiOptions: Record<string, unknown>;

  execute(query: string, page?: number): void;
  prefillQuery(query: string): void;
  getInputQuery(): string;
  clearAllResults(): void;
};
type GcseSearchCallback = {
  starting?: (gname: string, query: string) => void;
  ready?: (
    gname: string,
    query: string,
    promos: GscPromotion[] | undefined,
    results: GscResultObject[],
    div: HTMLElement
  ) => void;
  rendered?: (gname: string, query: string, promoElts: HTMLElement[], resultElts: HTMLElement[]) => void;
};

interface Window {
  __gcse?: {
    parsetags?: 'onload' | 'explicit';
    initializationCallback?: () => void;
    searchCallbacks?: {
      web?: GcseSearchCallback;
      image?: GcseSearchCallback;
    };
  };
  google?: {
    search: {
      cse: {
        element: {
          render(componentConfig: ComponentConfig, opt_componentConfig?: OptComponentConfig): void;
          go(opt_container?: string | Element): void;
          getElement(gname: string): ElementObject | null;
          getAllElements(): { [gname: string]: ElementObject };
        };
      };
    };
  };
}
