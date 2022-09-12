Fragment Images-alterAddImageTable {
    Action: replace
    Priority: high
    FragmentationPoints: addImageTable
    PointBracketsLan: html
    Destinations: Frontend-Todo-data-table-view
    SourceCode: [ALTERCODE-FRAG]
        <ng-container matColumnDef="image">
            <th mat-header-cell *matHeaderCellDef>Image</th>
            <td mat-cell *matCellDef="let element">
            <img
                [style.height.vh]="5"
                [src]="
                'https://storage.googleapis.com/todo-images/' +
                (element.image ? element.image : 'no_image.png')
                "
            />
            </td>
        </ng-container>
    [/ALTERCODE-FRAG]
}
