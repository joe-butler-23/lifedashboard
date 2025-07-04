const API_BASE_URL = 'https://api.hevyapp.com/v2';

class HevyService {
  static async getWorkouts(token) {
    try {
      const response = await fetch(`${API_BASE_URL}/workouts`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch workouts: ${response.status} ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error('HevyService.getWorkouts error:', error);
      throw new Error(`Network error: ${error.message}`);
    }
  }
}

export default HevyService;
