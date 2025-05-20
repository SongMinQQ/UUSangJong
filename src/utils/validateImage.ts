export function validateImageFile(
  newFiles: File[],
  exFiles: File[],
  maxPerMB = 10,
  maxTotalMB = 20
): { validFiles: File[]; errors: string[] } {
  const maxFile = maxPerMB * 1024 * 1024; // 10MB
  const maxTotal = maxTotalMB * 1024 * 1024; // 20MB

  const errors: string[] = [];
  const validFiles: File[] = [];

  let totalSize = exFiles.reduce((acc, file) => acc + file.size, 0);
  const totalNewSize = newFiles.reduce((acc, file) => acc + file.size, 0);

  for (const file of newFiles) {
    if (file.size > maxFile) {
      errors.push(`"${file.name}"은 ${maxPerMB}MB를 초과합니다.`);
      continue;
    }
    if (totalSize > maxTotal) {
      errors.push(`"${file.name}" 추가 시 전체 용량 ${maxTotalMB}MB 초과`);
      continue;
    }

    totalSize += file.size;
    validFiles.push(file);
  }
  return { validFiles, errors };
}
