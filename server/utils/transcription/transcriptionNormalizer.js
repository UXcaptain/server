const convertToNumber = (value) => {
  if (value === undefined || value === null) {
    return 0;
  }

  const num = parseFloat(value);
  return Number.isNaN(num) ? 0 : num;
};

const createSegmentsFromItems = (segments) => {
  if (!segments || segments.length === 0) {
    return [];
  }

  const cleanedSegments = [];

  for (let i = 0; i < segments.length; i += 1) {
    const item = segments[i];

    // Process items with required fields
    if (item.text && item.start !== undefined && item.end !== undefined) {
      // Clean up the segment by removing unnecessary fields and renaming timing fields
      const segment = {
        start_time: convertToNumber(item.start),
        end_time: convertToNumber(item.end),
        transcript: item.text.trim(),
      };

      segments.push(segment);
    }
  }

  return cleanedSegments;
};

export const cleanUpTranscriptSegments = async (segments) => {
  // Handle missing or malformed data
  if (!segments || !Array.isArray(segments)) {
    throw new Error('Invalid segments data');
  }

  // Create segments from items
  const cleanedSegments = createSegmentsFromItems(segments);

  // Return normalized structure matching the required format
  return cleanedSegments;
};
