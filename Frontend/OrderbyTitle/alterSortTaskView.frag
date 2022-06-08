Fragment Images-alterModifySort {
    Action: replace
    Priority: high
    FragmentationPoints: modifySort
    PointBracketsLan: html
    Destinations: Frontend-Todo-data-table-view
    SourceCode: [ALTERCODE-FRAG]
    <th
      mat-header-cell
      *matHeaderCellDef
      mat-sort-header
      sortActionDescription="Sort by task"
      matSort
      (matSortChange)="announceSortChange($event)"
    >
      Message
    </th>
    [/ALTERCODE-FRAG]
}
