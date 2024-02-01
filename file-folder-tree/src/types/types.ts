interface ExplorerData {
    id : string;
    name : string;
    isFolder : boolean;
    isExpanded? : boolean;
    items : ExplorerData[];
}

export default ExplorerData;