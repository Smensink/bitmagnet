import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { AppModule } from "../app.module";

@Component({
  selector: "app-settings",
  standalone: true,
  templateUrl: "./settings.component.html",
  imports: [AppModule, ReactiveFormsModule],
})
export class SettingsComponent {
  deleteNonEnglish = new FormControl(
    (() => {
      try {
        return localStorage.getItem("delete_non_english") === "1";
      } catch {
        return false;
      }
    })(),
  );

  save(): void {
    const value = this.deleteNonEnglish.value ? "1" : "0";
    try {
      localStorage.setItem("delete_non_english", value);
    } catch {
      // ignore storage failures
    }
  }
}
