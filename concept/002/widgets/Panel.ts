import facadus = module('../lib/facadus');

export class PanelWidget extends facadus.UIObject {
    private header:facadus.Element;
    private content:facadus.Element;

    public addHeader(el:facadus.Element) {
        this.header.append(el);
    }

    public addContent(el:facadus.Element) {
        this.content.append(el);
    }
}
