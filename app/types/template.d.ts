export type Template = {
    id: string;
    name: string;
    description: string;
    category: string[];
    created: string;
    link?: string;
}
  
export type TemplatesState = {
    templates: Template[];
    loading: boolean;
    error: string | null;
}
  
