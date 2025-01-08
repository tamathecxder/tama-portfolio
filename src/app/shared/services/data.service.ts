import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonPath: string | null = null;
  private isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  constructor() {
    this.jsonPath = 'assets/data/main.json';
  }

/**
 * Fetches JSON data from the configured path.
 * 
 * @returns A promise that resolves to the parsed JSON data.
 * @throws An error if the JSON path is not set.
 * 
 * This function sets the loading state to true before initiating the fetch
 * request and resets it to false once the operation is complete, regardless
 * of success or failure.
 */
  public async getData() {
    if (!this.jsonPath) {
      throw new Error('Sorry, the json path is not set yet.');
    }

    this.isLoadingSubject.next(true);
    
    try {
      const data = await fetch(this.jsonPath);
      
      return await data.json();
    } finally {
      setTimeout(() => {
        this.isLoadingSubject.next(false);
      }, 2000);
    }
  }

  /**
   * Retrieves hero data from the JSON source.
   *
   * @returns A promise that resolves to the hero data object.
   * This method internally calls `getData` and extracts the `hero` property
   * from the returned JSON data.
   */
  public async getHeroData() {
    return this.getData().then((res) => res.hero);
  }
}