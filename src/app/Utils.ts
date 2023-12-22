// Utils.ts
export class Utils {
    

    // If the the date is type of string, then it  should be in format 
    // yyyy-MM-dd HH:mm:ss, e.g.: '2023-12-14 15:30:00' 
    // It returns a HTML datetime-local format string, e.g.: '2023-12-14T15:30'   
    static formatDate(date: string | Date): string {
        if (date === null || date === undefined) return '';
        
        if (typeof date === 'string') {
          date = new Date(date);
        }
        
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
    
        return `${year}-${month}-${day}T${hours}:${minutes}`;
      }

    }
  

