Fragment Images-alterAddImage {
    Action: add
    Priority: high
    FragmentationPoints: addImage
    PointBracketsLan: html
    Destinations: Frontend-Todo-create-task-view
    SourceCode: [ALTERCODE-FRAG]
        <div>
          <label>Task Image (only .jpg supported)</label>
          <div class="col-sm-8">
            <input
              class="form-control"
              id="imageData"
              type="file"
              name="imageData"
              formControlName="imageData"
              (change)="onChange($event)"
            />
          </div>
        </div>
    [/ALTERCODE-FRAG]
}
