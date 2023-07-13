

export default (bytes: number): string => {
  const kilobytes = bytes / 1024;
  const megabytes = kilobytes / 1024;
  const gigabytes = megabytes / 1024;

  if (gigabytes >= 1) return `${gigabytes.toFixed(2)} GB`;
  if (megabytes >= 1) return `${megabytes.toFixed(2)} MB`;
  if (kilobytes >= 1) return `${kilobytes.toFixed(2)} KB`;

  return `${bytes} bytes`;
}